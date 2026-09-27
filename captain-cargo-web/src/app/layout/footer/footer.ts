import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon';
import { StoreButtons } from '../../shared/store-buttons';
import { ASSETS } from '../../core/assets.config';
import { COMPANY, LINKS } from '../../core/data/site.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon, StoreButtons],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  host: { class: 'block' },
})
export class Footer {
  protected readonly company = COMPANY;
  protected readonly links = LINKS;
  protected readonly illustration = ASSETS.illustrations.parcel;
  protected readonly year = new Date().getFullYear();

  protected readonly columns = [
    {
      title: 'Company',
      items: [
        { label: 'About us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Platform',
      items: [
        { label: 'Captain Logistic app', path: '/mobile-app' },
        { label: 'Cargo TMS', path: '/cargo-tms' },
        { label: 'Track a shipment', path: '/track' },
      ],
    },
  ];
}
