import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon';
import { SectionHeader } from '../../shared/section-header';
import { FeatureVideo } from '../../shared/feature-video';
import { PhoneFrame } from '../../shared/device-frames';
import { StoreButtons } from '../../shared/store-buttons';
import { ASSETS } from '../../core/assets.config';
import { APP_FEATURES, APP_MODULES } from '../../core/data/app-modules.data';
import { DESTINATIONS, HOW_IT_WORKS } from '../../core/data/site.data';

@Component({
  selector: 'app-mobile-app',
  imports: [RouterLink, Icon, SectionHeader, FeatureVideo, PhoneFrame, StoreButtons],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mobile-app.html',
})
export class MobileApp {
  protected readonly video = ASSETS.videos.appOverview;
  protected readonly features = APP_FEATURES;
  protected readonly modules = APP_MODULES;
  protected readonly steps = HOW_IT_WORKS;
  protected readonly destinations = DESTINATIONS;
}
