import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon';
import { SectionHeader } from '../../shared/section-header';
import { FeatureVideo } from '../../shared/feature-video';
import { BrowserFrame } from '../../shared/device-frames';
import { ASSETS } from '../../core/assets.config';
import { LINKS } from '../../core/data/site.data';
import { APP_TMS_FLOW, TMS_CAPABILITIES, TMS_GROUPS } from '../../core/data/tms.data';

@Component({
  selector: 'app-cargo-tms',
  imports: [RouterLink, Icon, SectionHeader, FeatureVideo, BrowserFrame],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cargo-tms.html',
})
export class CargoTms {
  protected readonly video = ASSETS.videos.tmsOverview;
  protected readonly dashboard = ASSETS.tmsScreens.dashboard;
  protected readonly groups = TMS_GROUPS;
  protected readonly flow = APP_TMS_FLOW;
  protected readonly capabilities = TMS_CAPABILITIES;
  protected readonly links = LINKS;
  protected readonly moduleCount = TMS_GROUPS.reduce((n, g) => n + g.modules.length, 0);
}
