import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
      {src: 'node_modules/@angular/material/prebuilt-themes/indigo-pink.css', inject: true},
      {src: 'node_modules/leaflet/dist/leaflet.css', inject: true, vendor: true},
      {src: 'node_modules/leaflet-dvf/dist/css/leaflet-dvf.css', inject: true}
    ];

    this.ROLLUP_INCLUDE_DIR = [
       ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
      'node_modules/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      {'node_modules/leaflet/dist/leaflet.js': [  'leaflet' ]},
      {'node_modules/leaflet/dist/leaflet-src.js': [  'latLng', 'map','control' ]},

    ];

    // Add packages (e.g. ng2-translate)
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    this.addPackageBundles({
     name:'devextreme',
     path:'node_modules/devextreme',
     packageMeta:{
       defaultExtension: 'js'
     }
   });


    let additionalPackages: ExtendPackages[] = [
      {
        name: '@angular/material',
        path: 'node_modules/@angular/material/bundles/material.umd.js'
      },
      {
        name: 'devextreme-angular',
        path: 'node_modules/devextreme-angular/index.js'
      },
      {
        name: '@angular/flex-layout',
        path: 'node_modules/@angular/flex-layout/bundles/flex-layout.umd.js'
      },
      {
        name: 'shufflejs',
        path: 'node_modules/shufflejs/dist/shuffle.min.js'
      },
      {
        name: 'jquery',
        path: 'node_modules/jquery/dist/jquery.min.js'
      },
      {
        name: 'jszip',
        path: 'node_modules/jszip/dist/jszip.min.js'
      },
      {
        name: 'md2',
        path: 'node_modules/md2/bundles/md2.umd.js'
      },
      {
        name: 'd3',
        path: 'node_modules/d3/build/d3.js'
      },
      {
        name: 'leaflet',
        path: 'node_modules/leaflet/dist/leaflet.js'
      },
       {
        name: 'leaflet-dvf',
        path: 'node_modules/leaflet-dvf/dist/leaflet-dvf.js'
      },
      {
        name: 'leaflet-dvf.markers',
        path: 'node_modules/leaflet-dvf/dist/leaflet-dvf.markers.js'
      },
      {
        name: '@asymmetrik/leaflet-d3',
        path: 'node_modules/@asymmetrik/leaflet-d3/dist/leaflet-d3.js'
      },
      {
        name: '@asymmetrik/angular2-leaflet',
        path: 'node_modules/@asymmetrik/angular2-leaflet/dist/bundles/angular2-leaflet.js'
      },
      {
        name: 'mydatepicker',
        path: 'node_modules/mydatepicker/bundles/mydatepicker.umd.min.js'
      },
      {
        name: 'd3-hexbin',
        path: 'node_modules/d3-hexbin/build/d3-hexbin.js'
      },
      {
        name: 'vectormap-data',
        path: 'node_modules/devextreme/dist/js/vectormap-data'
      }
     ];
    this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
