(function () {


  var app = angular.module('BookApp', ['ngRoute', 'restangular']);

  app.config( function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://tiy-atl-fe-server.herokuapp.com/collections/');

    $routeProvider.when('/', {
      templateUrl: 'templates/home.html',
      controller: 'BooksController'
    });

    $routeProvider.when('/single/:id', {
      templateUrl: 'templates/single.html',
      controller: 'BooksController'
    });

    $routeProvider.when('/addBook', {
      templateUrl: 'templates/addBook.html',
      controller: 'BooksController'
    })

  });


}());
