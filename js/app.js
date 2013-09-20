'use strict';

angular.module('apiDemo', ['youtube.api','ngRoute']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/youtube', {templateUrl: 'partials/youtube.html', controller: 'YTCtrl'});
    $routeProvider.otherwise({templateUrl: 'partials/index_partial.html'});
  }]);
