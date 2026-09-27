import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LINKS } from '../core/data/site.data';

/** "Get it on Google Play" (+ App Store when a URL is set in LINKS). */
@Component({
  selector: 'app-store-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <div class="flex flex-wrap items-center gap-3" [class.justify-center]="center()">
      <a
        class="btn-primary px-6 py-2.5"
        [href]="links.playStore"
        target="_blank"
        rel="noopener"
        aria-label="Get Captain Logistic on Google Play"
      >
        <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true">
          <path d="M1 1.2 11.2 11 1 20.8c-.3-.2-.5-.6-.5-1.1V2.3c0-.5.2-.9.5-1.1Z" fill="#479dff" />
          <path d="m14.6 7.6-3.4 3.4L1 1.2c.2-.1.6-.1.9.1l12.7 6.3Z" fill="#d3f6e3" />
          <path d="M14.6 14.4 1.9 20.7c-.3.2-.7.2-.9.1L11.2 11l3.4 3.4Z" fill="#ffd1b8" />
          <path d="m18.5 9.6-3.9-2-3.4 3.4 3.4 3.4 3.9-2c1-.5 1-2.3 0-2.8Z" fill="#fff2be" />
        </svg>
        <span class="flex flex-col text-left leading-tight">
          <span class="text-caption uppercase tracking-wide text-white/70">Get it on</span>
          <span class="text-body">Google Play</span>
        </span>
      </a>
      @if (links.appStore) {
        <a
          class="btn-primary px-6 py-2.5"
          [href]="links.appStore"
          target="_blank"
          rel="noopener"
          aria-label="Download Captain Logistic on the App Store"
        >
          <span class="flex flex-col text-left leading-tight">
            <span class="text-caption uppercase tracking-wide text-white/70">Download on the</span>
            <span class="text-body">App Store</span>
          </span>
        </a>
      }
    </div>
  `,
})
export class StoreButtons {
  readonly center = input(false);
  protected readonly links = LINKS;
}
