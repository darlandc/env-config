import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EnvConfigComponent } from './env-config.component';

@NgModule({
  declarations: [
    EnvConfigComponent
  ],
  imports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    EnvConfigComponent
  ]
})
export class EnvConfigModule { }
