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

(function () {

  angular.module('BookApp')
    .factory('booksFactory', ['$rootScope', 'Restangular', function ($rootScope, Restangular) {

      var bookStart = Restangular.all('ethowab');

      function getBooks () {
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
        function (booksFactory, $scope, $location, $rootScope) {

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
