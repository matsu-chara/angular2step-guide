/// <reference path='typings/angular2/angular2.d.ts' />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TodosService = (function () {
    function TodosService() {
        this.todos = ['Eat Breakfast', 'Walk Dog', 'Breathe'];
    }
    TodosService.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    return TodosService;
})();
var TodoList = (function () {
    function TodoList(todosService) {
        this.todosService = todosService;
    }
    TodoList.prototype.addTodo = function (todo) {
        this.todosService.addTodo(todo);
    };
    TodoList.prototype.doneTyping = function ($event) {
        var ENTER_KEY_CODE = 13;
        if ($event.which === ENTER_KEY_CODE) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    };
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'todos',
            appInjector: [TodosService]
        }),
        angular2_1.View({
            template: "\n  <ul>\n    <li *ng-for=\"#todo of todosService.todos\">\n      {{ todo }}\n    </li>\n  </ul>\n  <input #todotext (keyup)=\"doneTyping($event)\">\n  <button (click)=\"addTodo(todotext.value)\">Add Todo</button>\n  ",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [TodosService])
    ], TodoList);
    return TodoList;
})();
angular2_1.bootstrap(TodoList);
