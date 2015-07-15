/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'child'
})

@View({
  template: `
    <p> {{ message }} </p>
  `
})

class ChildComponent {
  message: String;

  constructor() {
    this.message = 'I am the child';
  }
}

export default ChildComponent;
