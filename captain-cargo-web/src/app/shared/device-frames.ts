import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Portrait phone frame for mobile app screenshots. Width is set by the parent. */
@Component({
  selector: 'app-phone-frame',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <div class="relative rounded-[44px] bg-charcoal p-[10px] shadow-soft">
      <div
        class="absolute left-1/2 top-[18px] z-10 h-[22px] w-[34%] -translate-x-1/2 rounded-full bg-charcoal"
        aria-hidden="true"
      ></div>
      <img
        class="block aspect-[390/844] w-full rounded-[34px] bg-lavender-wash object-cover"
        [src]="src()"
        [alt]="alt()"
        loading="lazy"
        decoding="async"
      />
    </div>
  `,
})
export class PhoneFrame {
  readonly src = input.required<string>();
  readonly alt = input.required<string>();
}

/** Desktop browser frame for Cargo TMS screenshots and video. */
@Component({
  selector: 'app-browser-frame',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <div class="overflow-hidden rounded-image bg-charcoal shadow-soft">
      <div class="flex items-center gap-3 px-4 py-3">
        <span class="flex gap-1.5" aria-hidden="true">
          <span class="size-2.5 rounded-full bg-[#ff5f57]"></span>
          <span class="size-2.5 rounded-full bg-[#febc2e]"></span>
          <span class="size-2.5 rounded-full bg-[#28c840]"></span>
        </span>
        <span
          class="mx-auto truncate rounded-full bg-white/10 px-4 py-1 text-caption text-white/70 sm:text-body-sm"
          >{{ address() }}</span
        >
        <span class="w-[42px]" aria-hidden="true"></span>
      </div>
      <div class="bg-bone-white">
        <ng-content />
      </div>
    </div>
  `,
})
export class BrowserFrame {
  readonly address = input<string>('tms.captaincargo.co');
}
