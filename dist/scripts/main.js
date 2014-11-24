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

(function () {

  angular.module('BookApp')
    .factory('booksFactory', ['$rootScope', 'Restangular', function ($rootScope, Restangular) {

      var bookStart = Restangular.all('enomosayos');

      function getBooks () {
        // return $http.get(url);
        return bookStart.getList();
      }

      function getBook (id) {
        //return $http.get(url + id);
        return bookStart.get(id);
      }

      function addBook (book) {

        bookStart.post(book).then( function () {
          $rootScope.$broadcast('book:added');
        });
      }

      return {

        getBooks: getBooks,
        getBook: getBook,
        addBook: addBook

      };

    }]);

}());

(function () {

  angular.module('BookApp')
    .controller('BooksController',
      ['booksFactory', '$scope', '$location', '$rootScope',
        function booksFactory, $scope, $location, $rootScope) {

        booksFactory.getBooks().then( function (results) {
          $scope.books = results;
        });

        $scope.addBook = function (book) {
          booksFactory.addBook(book);

          $rootScope.$on('book:added', function () {
            $location.path('/');
          });

        }

    }]);
}());
