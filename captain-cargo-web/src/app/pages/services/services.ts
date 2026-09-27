import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon';
import { SectionHeader } from '../../shared/section-header';
import { SERVICE_BENEFITS, SERVICES } from '../../core/data/services.data';
import { HOW_IT_WORKS } from '../../core/data/site.data';

@Component({
  selector: 'app-services',
  imports: [RouterLink, Icon, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Hero -->
    <section class="page pt-14 text-center md:pt-24">
      <p class="eyebrow">Services</p>
      <h1 class="mx-auto mt-5 max-w-5xl text-display">
        Complete cargo and logistics, <span class="highlight">end to end</span>
      </h1>
      <p class="mx-auto mt-6 max-w-2xl text-body-lg text-graphite md:text-subheading">
        From local handling to international freight, every service is built around reliability,
        transparency and customer-focused operations.
      </p>
      <ul class="mt-10 flex flex-wrap justify-center gap-2">
        @for (b of benefits; track b) {
          <li class="pill bg-bone-white text-ink">
            <app-icon name="check" [size]="16" class="text-iris-blue" /> {{ b }}
          </li>
        }
      </ul>
    </section>

    <!-- All services -->
    <section class="section page">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        @for (s of services; track s.id) {
          <article [id]="s.id" class="tile flex scroll-mt-28 flex-col" [class]="'tone-' + s.tone">
            <span class="icon-chip"><app-icon [name]="s.icon" /></span>
            <h2 class="mt-10 text-heading-sm">{{ s.title }}</h2>
            <p class="mt-3 text-body text-graphite">{{ s.summary }}</p>
          </article>
        }
      </div>
    </section>

    <!-- Process -->
    <section class="page">
      <app-section-header
        eyebrow="How it works"
        title="Every shipment, handled the same careful way"
      />
      <ol class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        @for (step of steps; track step.title; let i = $index) {
          <li class="card">
            <span class="font-display text-heading text-powder-blue">0{{ i + 1 }}</span>
            <h3 class="mt-6 text-heading-sm">{{ step.title }}</h3>
            <p class="mt-2 text-body text-graphite">{{ step.text }}</p>
          </li>
        }
      </ol>
    </section>

    <!-- CTA -->
    <section class="section page">
      <div class="tile tone-grad-solar text-center">
        <h2 class="mx-auto max-w-2xl text-heading-lg">Need a rate for your shipment?</h2>
        <p class="mx-auto mt-4 max-w-xl text-body-lg text-graphite">
          Get an instant Air or Sea rate in the app, or tell us about your cargo and we'll send a
          quote.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <a routerLink="/contact" class="btn-primary">Request a quote</a>
          <a routerLink="/mobile-app" class="btn-ghost">
            Use the app <app-icon name="arrow-right" [size]="18" />
          </a>
        </div>
      </div>
    </section>
  `,
})
export class Services {
  protected readonly services = SERVICES;
  protected readonly benefits = SERVICE_BENEFITS;
  protected readonly steps = HOW_IT_WORKS;
}
