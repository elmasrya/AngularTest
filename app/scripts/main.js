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

    $routeProvider.when('/add', {
      templateUrl: 'templates/add.html',
      controller: 'BooksController'
    })

  });

  app.directive('clickTurkey', function () {
    return {
      link: function ($scope, element, attrs) {
        element.bind('click', function () {
          console.log('my turkey directive was run');
        });
      }
    }
  });

}());
