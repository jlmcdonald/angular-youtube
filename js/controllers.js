'use strict';

/* Controllers */

function YTCtrl($scope,ytplayer,ytdataapi) {
  $scope.$on('apiReady',function () {
      ytplayer.videoId='5meWI3iX1sE';
      ytplayer.loadPlayer();
      $scope.$digest();
  });
}

YTCtrl.$inject = ['$scope','youtubePlayer','youtubeData'];
