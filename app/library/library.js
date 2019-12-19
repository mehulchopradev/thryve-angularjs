'use strict';

angular.module('myapp.library', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/library', {
    templateUrl: 'library/library.html',
    controller: 'libraryCtrl'
  });
}])

.controller('libraryCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.bookList = [];

    $scope.startEditing = function () {
        $scope.editForm = true;
        $scope.newBook = {
            title: null,
            price: null,
            pages: null,
        }
    };

    $scope.onSort = function (orderColumn) {
        $scope.orderColumn = orderColumn;
    };

    $scope.save = function () {
        var book = $scope.newBook;
        var options = {
            method: 'POST',
            url: 'http://localhost:3000/books',
            data: {
                book: book
            }
        };

        $http(options)
            .then(function (response) {
                var newBookAdded = response.data;
                $scope.bookList.push(newBookAdded);

                $scope.newBook = {
                    title: null,
                    price: null,
                    pages: null,
                };
            }).catch(function (err) {
                $window.alert('Something went wrong');
            });
    };

    this.$onInit = function () {
        // called only once once the current controller has been initialized
        var options = {
            method: 'GET',
            url: 'http://localhost:3000/books'
        };
    
        var promise = $http(options);
        promise.then(function (response) {
            // this handler will be called when the promise is fulfilled in the future
            $scope.bookList = response.data.books;
        });
        promise.catch(function (err) {
            // this handler will be called when the promise is rejected in the future
            debugger;
        });
    };
}]);