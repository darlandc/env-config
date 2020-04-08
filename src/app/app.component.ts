import { environment } from '../environments/environment';
import { IAppConfig } from './../../projects/env-config/src/lib/env/interfaces/app-config.interface';
import { Component } from '@angular/core';
import { Config } from 'projects/env-config/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  appEnv: string;

  @Config('endpoint', 'dev') endpoint;

  env: string;
  host: string;

  constructor() {
    this.appEnv = environment.env;
  }


  tap() {
    console.log('tap on app!');
    console.log(this.endpoint);
  }

}
