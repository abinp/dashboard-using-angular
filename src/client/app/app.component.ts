import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Config } from './shared/config/env.config';
import './operators';
/**
 * This class represents the main application component.
 */

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [],
})
export class AppComponent {
  
}
