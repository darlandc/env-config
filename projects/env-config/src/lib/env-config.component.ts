import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Config } from './env/decorators/config.decorator';

@Component({
  selector: 'env-config',
  template: `
    <p>Runnin environment: {{ env }}</p>
    <button (setConfig)="$event">Get config!</button>
  `,
  styles: []
})
export class EnvConfigComponent implements OnInit {

  @Config('env') env;
  @Config('host') host;

  @Output() setConfig = new EventEmitter();

  initConfig = {};

  constructor() {
    this.initConfig = {
      env: this.env,
      host: this.host
    };
  }

  ngOnInit() {
      this.setConfig.emit(this.initConfig);
  }

  tap() {
    console.log(this.initConfig);
  }




}
