import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon';
import { SectionHeader } from '../../shared/section-header';
import { ASSETS } from '../../core/assets.config';
import { ABOUT, STATS, WHY_CHOOSE_US } from '../../core/data/site.data';

@Component({
  selector: 'app-about',
  imports: [RouterLink, Icon, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Hero -->
    <section class="page pt-14 md:pt-24">
      <p class="eyebrow">About Captain Cargo</p>
      <h1 class="mt-5 max-w-5xl text-display">{{ about.headline }}</h1>
      <p class="mt-6 max-w-2xl text-body-lg text-graphite md:text-subheading">{{ about.intro }}</p>
    </section>

    <!-- Stats -->
    <section class="page pt-14">
      <dl class="grid grid-cols-2 gap-4 lg:grid-cols-4">
        @for (s of stats; track s.label) {
          <div class="flex flex-col rounded-card bg-bone-white p-6 md:p-10">
            <dt class="order-2 mt-2 text-body text-graphite">{{ s.label }}</dt>
            <dd class="font-display text-display tabular-nums text-ink">{{ s.value }}</dd>
          </div>
        }
      </dl>
    </section>

    <!-- Story -->
    <section class="section page">
      <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <img
          [src]="image"
          alt="Captain Cargo operations"
          class="aspect-[4/3] w-full rounded-image object-cover"
          loading="lazy"
        />
        <div>
          <h2 class="text-heading-lg">{{ about.storyTitle }}</h2>
          <p class="mt-5 text-body-lg text-graphite">{{ about.story }}</p>
          <a routerLink="/services" class="btn-primary mt-8">
            Our services <app-icon name="arrow-right" [size]="18" />
          </a>
        </div>
      </div>
    </section>

    <!-- Mission & vision -->
    <section class="page">
      <div class="grid gap-4 md:grid-cols-2">
        <article class="tile tone-grad-violet">
          <span class="icon-chip"><app-icon name="route" /></span>
          <h2 class="mt-10 text-heading">Our mission</h2>
          <p class="mt-4 text-body-lg text-graphite">{{ about.mission }}</p>
        </article>
        <article class="tile tone-grad-aqua">
          <span class="icon-chip"><app-icon name="globe" /></span>
          <h2 class="mt-10 text-heading">Our vision</h2>
          <p class="mt-4 text-body-lg text-graphite">{{ about.vision }}</p>
        </article>
      </div>
    </section>

    <!-- Leadership message (hidden until text is added in site.data.ts) -->
    @if (about.leadershipMessage; as msg) {
      <section class="section page">
        <figure class="card mx-auto max-w-4xl">
          <p class="eyebrow">Leadership message</p>
          <blockquote class="mt-6 font-display text-heading text-ink">“{{ msg.text }}”</blockquote>
          <figcaption class="mt-8 border-t border-sky-tint pt-6">
            <span class="block text-body text-ink">{{ msg.name }}</span>
            <span class="block text-body-sm text-fog">{{ msg.role }}</span>
          </figcaption>
        </figure>
      </section>
    }

    <!-- Why choose us -->
    <section class="section page">
      <app-section-header
        eyebrow="Why Captain Cargo"
        title="Why customers recommend us"
        subtitle="A strong logistics network, efficient cargo handling and a team that answers when you call."
      />
      <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        @for (item of whyUs; track item.title) {
          <article class="card">
            <span class="icon-chip bg-sky-tint"><app-icon [name]="item.icon" /></span>
            <h3 class="mt-8 text-heading-sm">{{ item.title }}</h3>
            <p class="mt-3 text-body text-graphite">{{ item.text }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class About {
  protected readonly about = ABOUT;
  protected readonly stats = STATS;
  protected readonly whyUs = WHY_CHOOSE_US;
  protected readonly image = ASSETS.illustrations.about;
}
