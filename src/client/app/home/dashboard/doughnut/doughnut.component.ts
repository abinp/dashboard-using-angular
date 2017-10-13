import { Component } from '@angular/core';
import { DxPieChartModule } from 'devextreme-angular';///ui/chart';
import { PopulationByRegion, DoughnutDataService } from './doughnut-data.service';
import { PercentPipe } from '@angular/common';

@Component({
    moduleId : module.id,
    selector :'doughnut',
    templateUrl : 'doughnut.component.html',
    styleUrls : ['doughnut.component.css']
})
export class DoughnutComponent {
    pipe : any = new PercentPipe("en-US");

    populationByRegions : PopulationByRegion[];

    constructor(doughnutDataService : DoughnutDataService){
        this.populationByRegions = doughnutDataService.getPopulationByRegions();
    }
    
    customiseTooltip = (arg : any) => {
        arg.valueText + "-" + this.pipe.tranform(arg.percent, "1.2-2")
    }
}