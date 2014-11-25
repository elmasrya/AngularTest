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
