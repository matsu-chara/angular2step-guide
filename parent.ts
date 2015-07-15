/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import ChildComponent from './child';

@Component({
  selector: 'parent'
})

@View({
  template: `
    <p> {{ message }} </p>
    <child></child>
  `,
  directives: [ChildComponent]
})

class ParentComponent {
  message: String;

  constructor() {
    this.message = 'I am the parent';
  }
}

bootstrap(ParentComponent);
