import { Component } from '@angular/core';
import { environment } from '../../src/environments/environment';
import { Config } from 'projects/env-config/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  @Config('authMode') authMode;

  env: string = '';
  host: string = '';
  initConfig: any;

  constructor() {}

  getConfig(init) {
    const response = init;
    this.initConfig = {
      env: response.env,
      host: response.host
    };
    this.env = this.initConfig.env;
    this.host = this.initConfig.host;
  }

  tap() {
    console.log(this.authMode);
  }

}
