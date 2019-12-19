var app = angular.module('myapp', [
  'ngRoute',
  'myapp.calculator',
  'myapp.todos',
  'myapp.library'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  // $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.filter('title', function () {
  return function (element) {
    if (element.length > 0) {
      return element[0].toUpperCase() + element.substring(1).toLowerCase();
    }

    return element;
  };
});

app.directive('hello', function () {
  return {
    restrict: 'E',
    template: 'Hello World {{ 5 + 4 }}'
  };
});

app.directive('calcResults', function () {
  return {
    templateUrl: 'calcResults.html',
    restrict: 'E',
    scope: {
      f: "=first",
      s: "=second",
      a: "=ans"
    },
  };
});

app.directive('mySelect', function () {
  return {
    templateUrl: 'mySelect.html',
    restrict: 'E',
    scope: {
      items: "=items",
      ops: "=ops"
    },
  };
});