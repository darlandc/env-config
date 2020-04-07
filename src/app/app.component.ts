import { IAppConfig } from './../../projects/env-config/src/lib/env/interfaces/app-config.interface';
import { Component } from '@angular/core';
import { environment } from '../../src/environments/environment';
import { Config } from 'projects/env-config/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  @Config('dev') DEV_CONFIG: IAppConfig;
  @Config('prod') PROD_CONFIG: IAppConfig;

  env: string;
  host: string;

  private RUN = null;

  constructor() {}

  tap() {
    console.log('tap!');
    this.RUN = 'prod';
    this.checkEnvironment(this.RUN);
  }

  checkEnvironment(RUN) {
    switch (this.RUN) {
      case 'dev' :
      this.env = this.DEV_CONFIG.env;
      this.host = this.DEV_CONFIG.host;
      break;
      case 'prod' :
      this.env = this.PROD_CONFIG.env;
      this.host = this.PROD_CONFIG.host;
      break;
    }
  }

}
