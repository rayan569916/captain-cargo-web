import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { Icon } from './icon';

/**
 * Autoplaying, muted, looping product video with a poster fallback and a
 * play/pause control. Respects prefers-reduced-motion (won't autoplay).
 * Pass a transparent WebM (green screen removed) for the floating-phones look.
 */
@Component({
  selector: 'app-feature-video',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <div class="relative overflow-hidden" [class]="rounded()">
      <video
        #player
        class="block aspect-video h-auto w-full object-cover"
        [poster]="poster()"
        [attr.aria-label]="label()"
        muted
        loop
        playsinline
        preload="metadata"
        (play)="playing.set(true)"
        (pause)="playing.set(false)"
      >
        @if (webm()) {
          <source [src]="webm()" type="video/webm" />
        }
        <source [src]="mp4()" type="video/mp4" />
      </video>

      <button
        type="button"
        class="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-paper-white/90 px-4 py-2 text-body-sm text-ink backdrop-blur transition hover:bg-paper-white"
        [attr.aria-label]="playing() ? 'Pause video' : 'Play video'"
        (click)="toggle()"
      >
        <app-icon [name]="playing() ? 'pause' : 'play'" [size]="14" />
        {{ playing() ? 'Pause' : 'Play' }}
      </button>
    </div>
  `,
})
export class FeatureVideo {
  readonly mp4 = input.required<string>();
  readonly webm = input<string>();
  readonly poster = input<string>('');
  readonly label = input<string>('Product video');
  /** Tailwind radius class for the video box. */
  readonly rounded = input<string>('rounded-image');

  protected readonly playing = signal(false);
  private readonly player = viewChild.required<ElementRef<HTMLVideoElement>>('player');

  constructor() {
    afterNextRender(() => {
      const video = this.player().nativeElement;
      // Angular doesn't reliably reflect the static `muted` attribute; set the property
      // so browsers allow autoplay.
      video.muted = true;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduceMotion) {
        video.play().catch(() => this.playing.set(false));
      }
    });
  }

  protected toggle(): void {
    const video = this.player().nativeElement;
    if (video.paused) {
      video.play().catch(() => this.playing.set(false));
    } else {
      video.pause();
    }
  }
}
