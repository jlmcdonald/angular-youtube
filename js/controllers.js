'use strict';

/* Controllers */

function ReceiverCtrl($scope,$routeParams,ytplayer,ytdataapi) {
  $scope.$on('apiReady',function () {
    ytdataapi.search("",{'topicId':$routeParams.topicId,'type':'video','maxResults':1,'order':'viewCount'}).success(function(apiresults) {
      ytplayer.videoId=apiresults.items[0].id.videoId;
      ytplayer.loadPlayer();
    });
    $scope.$digest();
  });
}

ReceiverCtrl.$inject = ['$scope','$routeParams','YtPlayerApi','YtDataApi'];
