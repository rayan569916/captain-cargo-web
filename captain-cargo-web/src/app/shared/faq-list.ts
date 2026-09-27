import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Icon } from './icon';
import type { FaqItem } from '../core/data/types';

/** Accordion — soft grid-template-rows expand at 0.65s. */
@Component({
  selector: 'app-faq-list',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <div class="flex flex-col gap-3">
      @for (item of items(); track item.question; let i = $index) {
        <div class="rounded-card bg-bone-white">
          <h3 class="font-sans">
            <button
              type="button"
              class="flex w-full items-center justify-between gap-6 rounded-card px-6 py-6 text-left md:px-10 md:py-8"
              [id]="idPrefix() + '-q-' + i"
              [attr.aria-expanded]="open() === i"
              [attr.aria-controls]="idPrefix() + '-a-' + i"
              (click)="toggle(i)"
            >
              <span class="text-body-lg font-medium text-ink md:text-subheading">{{
                item.question
              }}</span>
              <span
                class="grid size-10 shrink-0 place-items-center rounded-full bg-sky-tint text-ink transition-transform duration-500"
                [class.rotate-45]="open() === i"
              >
                <app-icon name="plus" [size]="18" />
              </span>
            </button>
          </h3>
          <div
            class="grid transition-[grid-template-rows] duration-[650ms] ease-settle"
            role="region"
            [id]="idPrefix() + '-a-' + i"
            [attr.aria-labelledby]="idPrefix() + '-q-' + i"
            [style.grid-template-rows]="open() === i ? '1fr' : '0fr'"
          >
            <div class="overflow-hidden">
              <p class="max-w-3xl px-6 pb-6 text-body text-fog md:px-10 md:pb-8">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      }
    </div>
  `,
})
export class FaqList {
  readonly items = input.required<FaqItem[]>();
  readonly idPrefix = input<string>('faq');

  protected readonly open = signal<number | null>(0);

  protected toggle(index: number): void {
    this.open.update((current) => (current === index ? null : index));
  }
}
