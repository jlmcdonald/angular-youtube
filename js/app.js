'use strict';

angular.module('apiDemo', ['youtube.api.services','youtube.api.directives','ngRoute']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/youtube', {templateUrl: 'partials/youtube.html', controller: 'YTCtrl'});
    $routeProvider.otherwise({templateUrl: 'partials/index_partial.html'});
  }]);
