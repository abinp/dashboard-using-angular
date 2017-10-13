import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  exports: [HomeComponent],
  imports: [ HomeRoutingModule, SharedModule,DashboardModule,
  MaterialModule, FlexLayoutModule ],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule { }
