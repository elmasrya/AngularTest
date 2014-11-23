var app = angular.module('PeopleList',['ngRoute']);

app.config( function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'templates/list-template.html',
    controller: 'PersonController'
  });

  $routeProvider.when('/about', {
    templateUrl: 'templates/about-template.html',
    controller: 'AboutController'
  });
  $routeProvider.otherwise({
    templateUrl:'templates/other-template.html'
    controller: 'OtherController'
  });
});

app.controller('PersonController', function ($scope) {


  $scope.people = [
    {
      name: 'Bob',
      age: 45,
      test: true
    },

    {
      name: 'Tim',
      age: 31,
      test: true
    },

    {
      name: 'Sam',
      age: 113,
      test: true
    },
  ];
  $scope.hello = function (n, i){

    if($scope.people[i].name===('Tim'))
      alert('Hi there!'+ n + ' and I am number ' + i);
      alert('Hi there!'+ n + ' and I am number ' + i);

    alert('Hi there!'+ n + ' and I am number ' + i);
  };

});
