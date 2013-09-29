'use strict';

/* Controllers */

function YTCtrl($scope,ytplayer,ytdataapi) {
  $scope.player=ytplayer;
  $scope.$on('apiReady',function () {
      $scope.player.loadPlayer();
  });
}

YTCtrl.$inject = ['$scope','youtubePlayer','youtubeData'];
