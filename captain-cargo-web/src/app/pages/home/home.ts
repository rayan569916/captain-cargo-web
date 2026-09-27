import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon';
import { SectionHeader } from '../../shared/section-header';
import { FeatureVideo } from '../../shared/feature-video';
import { FaqList } from '../../shared/faq-list';
import { StoreButtons } from '../../shared/store-buttons';
import { ASSETS } from '../../core/assets.config';
import {
  COMPANY,
  DESTINATIONS,
  FAQS,
  HOW_IT_WORKS,
  STATS,
  TESTIMONIALS,
  WHY_CHOOSE_US,
} from '../../core/data/site.data';
import { SERVICES } from '../../core/data/services.data';
import { APP_FEATURES } from '../../core/data/app-modules.data';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    Icon,
    SectionHeader,
    FeatureVideo,
    FaqList,
    StoreButtons,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class Home {
  private readonly router = inject(Router);

  protected readonly assets = ASSETS;
  protected readonly company = COMPANY;
  protected readonly stats = STATS;
  protected readonly steps = HOW_IT_WORKS;
  protected readonly whyUs = WHY_CHOOSE_US;
  protected readonly faqs = FAQS.slice(0, 3);
  protected readonly testimonial = TESTIMONIALS[0];
  protected readonly featuredServices = SERVICES.filter((s) => s.featured);
  protected readonly appFeatures = APP_FEATURES.slice(0, 4);
  /** Doubled so the marquee loops seamlessly. */
  protected readonly marquee = [...DESTINATIONS, ...DESTINATIONS];

  protected readonly trackingRef = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  protected track(): void {
    const ref = this.trackingRef.value.trim();
    if (!ref) {
      this.trackingRef.markAsTouched();
      return;
    }
    void this.router.navigate(['/track'], { queryParams: { ref } });
  }
}
