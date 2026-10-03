import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  signal,
  untracked,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon';
import { TrackingResult, TrackingService } from '../../core/services/tracking.service';
import { COMPANY } from '../../core/data/site.data';
import { ToastService } from '../../service/toast';

@Component({
  selector: 'app-track',
  imports: [DatePipe, ReactiveFormsModule, RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './track.html',
})
export class Track {
  private readonly tracking = inject(TrackingService);
  private readonly router = inject(Router);
  toastService = inject(ToastService);

  /** Bound from the ?ref= query param (withComponentInputBinding). */
  readonly ref = input<string>();

  protected readonly company = COMPANY;
  protected readonly reference = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  protected readonly loading = signal(false);
  protected readonly result = signal<TrackingResult | null>(null);
  protected readonly error = signal<string | null>(null);

  constructor() {
    effect(() => {
      const ref = this.ref();
      if (ref) {
        untracked(() => {
          this.reference.setValue(ref);
          void this.lookup(ref);
        });
      }
    });
  }

  protected submit(): void {
    const ref = this.reference.value.trim();
    if (!ref) {
      this.reference.markAsTouched();
      this.error.set('Enter your shipment reference to track it.');
      return;
    }
    if (ref === this.ref()) {
       
      return;
    }
    // Put the reference in the URL (shareable, survives refresh); the `ref` input
    // then changes and the effect runs the lookup.
    void this.router.navigate([], { queryParams: { ref }, replaceUrl: true });
  }

  private async lookup(ref: string): Promise<void> {
    this.error.set(null);
    this.loading.set(true);
    try {
      this.result.set(await this.tracking.lookup(ref));
    } catch {
      this.result.set(null);
      this.error.set(
        'We couldn’t find that shipment. Check the reference and try again, or contact our team.',
      );
    } finally {
      this.loading.set(false);
    }
  }
}
