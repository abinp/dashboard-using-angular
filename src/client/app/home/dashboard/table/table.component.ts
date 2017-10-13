import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { Company, TableDataService } from './table-data.service';

@Component({
    moduleId : module.id,
    selector: 'table',
    templateUrl : 'table.component.html'
})
export class TableComponent {
    dataSource : Company[];

    constructor(tableDataService: TableDataService) {
        this.dataSource = tableDataService.getCompanies();
    }
}