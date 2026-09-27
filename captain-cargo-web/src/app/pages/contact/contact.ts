import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Icon } from '../../shared/icon';
import { SectionHeader } from '../../shared/section-header';
import { FaqList } from '../../shared/faq-list';
import { ASSETS } from '../../core/assets.config';
import { COMPANY, FAQS } from '../../core/data/site.data';

type FieldName = 'firstName' | 'lastName' | 'email' | 'phone' | 'subject' | 'message';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Icon, SectionHeader, FaqList],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly company = COMPANY;
  protected readonly faqs = FAQS;
  protected readonly map = ASSETS.officeMap;

  protected readonly form = new FormGroup({
    firstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    lastName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    phone: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    subject: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  /** Set after a valid submit: ready-to-send WhatsApp and email links. */
  protected readonly prepared = signal<{ whatsapp: string; email: string } | null>(null);

  protected readonly errors: Record<FieldName, string> = {
    firstName: 'Enter your first name.',
    lastName: 'Enter your last name.',
    email: 'Enter a valid email address, like name@company.com.',
    phone: 'Enter a phone number we can reach you on.',
    subject: 'Tell us what this is about.',
    message: 'Write a short message.',
  };

  protected invalid(name: FieldName): boolean {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || control.dirty);
  }

  /**
   * TODO: when a backend endpoint exists, POST `this.form.getRawValue()` to it here.
   * Until then, the form prepares the message for WhatsApp or email so nothing is lost.
   */
  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const body =
      `${v.subject}\n\n${v.message}\n\n` +
      `${v.firstName} ${v.lastName}\n${v.email}\n${v.phone}`;
    this.prepared.set({
      whatsapp: `https://wa.me/${this.company.phone.whatsapp}?text=${encodeURIComponent(body)}`,
      email: `mailto:${this.company.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`,
    });
  }

  protected reset(): void {
    this.form.reset();
    this.prepared.set(null);
  }
}
