import {Component } from '@angular/core';
import { DxChartModule } from 'devextreme-angular';//ui/chart';
import { Population, BarChartDataService } from './bar-chart-data.service';

@Component({
    moduleId:module.id,
    selector: 'bar-chart',
    templateUrl : 'bar-chart.component.html',
    styleUrls : ['bar-chart.component.css']
})

export class BarChartComponent {
    populationData : Population[];

    constructor( barChartDataService : BarChartDataService ){
        this.populationData = barChartDataService.getPopulationData();
    }

}