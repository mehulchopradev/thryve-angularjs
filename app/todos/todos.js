'use strict';

angular.module('myapp.todos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todos', {
    templateUrl: 'todos/todos.html',
    controller: 'todosCtrl'
  });
}])

.controller('todosCtrl', ['$scope', function($scope) {
  function Todo(description, done, date) {
    this.description = description;
    this.done = done;
    this.date = date;
  }

  $scope.todoList = [];
  $scope.newTodo = null;

  $scope.save = function () {
    var newTodo = $scope.newTodo;
    var todoObj = new Todo(newTodo, false, new Date());
    $scope.todoList.push(todoObj);
    $scope.newTodo = null;
  };

  $scope.clearCompleted = function () {
    var oldTodoList = $scope.todoList;
    var newTodoList = oldTodoList.filter(function (oldTodo) {
      return !oldTodo.done;
    });

    $scope.todoList = newTodoList;
  };

  $scope.disableClearBtn = function () {
    var completedTodos = $scope.todoList.filter(function (todo) {
      return todo.done;
    });

    return completedTodos.length === 0;
  };
}]);