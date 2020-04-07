import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-test',
  template: `
    <p>
      test works!
    </p>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Output() setConfig = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.setConfig.emit('test event');
  }

}
