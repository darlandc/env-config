import { IAppConfig } from './env/interfaces/app-config.interface';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Config } from './env/decorators/config.decorator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'env-config',
  template: `
    <p>Runnin environment: ''</p>
    <button (click)="tap()">tap!</button>
  `,
  styles: []
})
export class EnvConfigComponent implements OnInit {

  @Input() appEnv;

  constructor() {}

  ngOnInit() {
  }

  tap() {
    console.log('tap on lib!')
  }

}
