/// <reference path='typings/angular2/angular2.d.ts' />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

class TodosService {
  todos: Array<string>;
  constructor() {
    this.todos = ['Eat Breakfast', 'Walk Dog', 'Breathe'];
  }
  addTodo(todo: string) {
    this.todos.push(todo);
  }
}

@Component({
  selector: 'todos',
  appInjector: [TodosService]
})

@View({
  template: `
  <ul>
    <li *ng-for="#todo of todosService.todos">
      {{ todo }}
    </li>
  </ul>
  <input #todotext (keyup)="doneTyping($event)">
  <button (click)="addTodo(todotext.value)">Add Todo</button>
  `,
  directives: [NgFor]
})

class TodoList {
  todosService: TodosService

  constructor(todosService: TodosService) {
    this.todosService = todosService;
  }

  addTodo(todo: string) {
    this.todosService.addTodo(todo);
  }

  doneTyping($event) {
    const ENTER_KEY_CODE = 13;
    if ($event.which === ENTER_KEY_CODE) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}

bootstrap(TodoList);
