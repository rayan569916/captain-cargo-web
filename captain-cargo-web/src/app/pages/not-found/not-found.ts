import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page py-32 text-center">
      <p class="eyebrow">404</p>
      <h1 class="mx-auto mt-5 max-w-3xl text-display">This page took a different route</h1>
      <p class="mx-auto mt-5 max-w-lg text-body-lg text-graphite">
        The page you're looking for doesn't exist or has moved.
      </p>
      <div class="mt-10 flex flex-wrap justify-center gap-3">
        <a routerLink="/" class="btn-primary">Back to home</a>
        <a routerLink="/track" class="btn-ghost">Track a shipment</a>
      </div>
    </section>
  `,
})
export class NotFound {}
