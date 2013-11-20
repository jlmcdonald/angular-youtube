'use strict';

/* Controllers */

function YTCtrl($scope,ytplayer,ytdataapi) {
  $scope.player=ytplayer;
  $scope.$on('apiReady',function () {
      $scope.player.loadPlayer(function() {
      	if ($scope.muted) {
      		$scope.player.muteVideo();
      	}
      });
  });
}

YTCtrl.$inject = ['$scope','youtubePlayer','youtubeData'];
