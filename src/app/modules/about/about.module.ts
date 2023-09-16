import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [SharedModule, AboutRoutingModule],
})
export class AboutModule {}
