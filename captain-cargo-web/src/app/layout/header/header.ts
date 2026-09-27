import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from '../../shared/icon';
import { ASSETS } from '../../core/assets.config';
import { COMPANY, LINKS, NAV } from '../../core/data/site.data';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  host: {
    class: 'sticky top-0 z-50 block',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Header {
  protected readonly nav = NAV;
  protected readonly links = LINKS;
  protected readonly company = COMPANY;
  protected readonly logo = ASSETS.brand.logo;

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
