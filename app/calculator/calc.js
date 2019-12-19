'use strict';

var subapp = angular.module('myapp.calculator', ['ngRoute']);

subapp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/calculator', {
    templateUrl: 'calculator/calc.html',
    controller: 'calculatorCtrl'
  });
}]);

subapp.controller('calculatorCtrl', ['$scope', function ($scope) {
  // intialize our model
  $scope.first = 5;
  $scope.second = 3;
  $scope.ops = '-';

  $scope.operations = [
    {
      label: '+',
      value: '+',
    },
    {
      label: '-',
      value: '-',
    },
    {
      label: '*',
      value: '*',
    }
  ];

  $scope.shouldDisable = function () {
    var a = parseInt($scope.first);
    var b = parseInt($scope.second);

    return isNaN(a) || isNaN(b);
  };

  $scope.calculate = function () {
    var ans;
    var ops = $scope.ops;
    var a = parseInt($scope.first);
    var b = parseInt($scope.second);

    if (ops === '+') {
      ans = a + b;
    } else if (ops === '-') {
      ans = a - b;
    } else if (ops === '*') {
      ans = a * b;
    }

    $scope.ans = ans;
  };
}]);