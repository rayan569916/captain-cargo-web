import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/** Display headline + supporting subhead. Centered by default. */
@Component({
  selector: 'app-section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <div [class]="wrapperClass()">
      @if (eyebrow()) {
        <p class="eyebrow mb-4">{{ eyebrow() }}</p>
      }
      <h2 [class]="size() === 'display' ? 'text-display' : 'text-heading-lg'">
        {{ title() }}
        @if (highlight()) {
          <span class="highlight">{{ highlight() }}</span>
        }
      </h2>
      @if (subtitle()) {
        <p class="mt-5 text-body-lg text-graphite" [class.mx-auto]="align() === 'center'">
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeader {
  readonly eyebrow = input<string>();
  readonly title = input.required<string>();
  /** Optional trailing words shown in the sky-blue highlight colour. */
  readonly highlight = input<string>();
  readonly subtitle = input<string>();
  readonly align = input<'center' | 'left'>('center');
  readonly size = input<'display' | 'large'>('large');

  protected readonly wrapperClass = computed(() =>
    this.align() === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl text-left',
  );
}
