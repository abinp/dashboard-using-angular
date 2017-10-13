import { Injectable } from '@angular/core';

export class PopulationByRegion {
    region: string;
    val: number;
}

let populationByRegions: PopulationByRegion[] = [{
    region: "Asia",
    val: 4119626293
}, {
    region: "Africa",
    val: 1012956064
}, {
    region: "Northern America",
    val: 344124520
}, {
    region: "Latin America and the Caribbean",
    val: 590946440
}, {
    region: "Europe",
    val: 727082222
}, {
    region: "Oceania",
    val: 35104756
}];

@Injectable()
export class DoughnutDataService {
    getPopulationByRegions(): PopulationByRegion[] {
        return populationByRegions;
    }
}