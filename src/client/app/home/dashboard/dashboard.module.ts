import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { DxChartModule } from 'devextreme-angular';//ui/chart';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BarChartDataService } from './bar-chart/bar-chart-data.service';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { DoughnutDataService } from './doughnut/doughnut-data.service';
import { DxPieChartModule, DxDataGridModule } from 'devextreme-angular';
import { TableComponent } from './table/table.component';
import { TableDataService } from './table/table-data.service';

@NgModule({
  imports: [DashboardRoutingModule, SharedModule, MaterialModule, DxDataGridModule,
            FlexLayoutModule, DxPieChartModule,DxChartModule],
  declarations: [DashboardComponent, BarChartComponent, DoughnutComponent, TableComponent],
  exports: [DashboardComponent, DashboardRoutingModule],
  providers: [BarChartDataService, DoughnutDataService,TableDataService]
})
export class DashboardModule { }
