import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, Location } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { DxChartModule, DxPieChartModule } from 'devextreme-angular';///ui/chart';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { NgModule, enableProdMode } from '@angular/core';
import { Md2Module }  from 'md2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { SherlockService } from './sherlock.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, HttpModule, Md2Module.forRoot(),
  AppRoutingModule, DxChartModule,BrowserAnimationsModule,
  HomeModule,FlexLayoutModule,DxSelectBoxModule,
  MaterialModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
  SherlockService ],
  bootstrap: [AppComponent]

})
export class AppModule { }

