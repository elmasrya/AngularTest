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
