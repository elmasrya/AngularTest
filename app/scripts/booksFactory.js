(function () {

  angular.module('BookApp')
    .factory('booksFactory', ['$rootScope', 'Restangular', function ($rootScope, Restangular) {

      var bookStart = Restangular.all('ethowab');

      function getBooks () {
        return bookStart.getList();
      }

      function getBook (id) {
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
