'use strict';

/* Services */

angular.module('youtube.api',[]).run(function() {
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    })
    .factory('youtubePlayer', ['$window', '$rootScope', function ($window, $rootScope) {
        var ytplayer = {"playerId":null,"playerObj":null,"videoId":null,"height":390,"width":640};

        $window.onYouTubeIframeAPIReady = function () {
            $rootScope.$broadcast('apiReady');
        };

        ytplayer.setPlayerId = function(elemId) {
            this.playerId=elemId;
        };

	ytplayer.setDimensions = function(width,height) {
	    this.width=width;
	    this.height=height;
	};

        ytplayer.loadPlayer = function () {
           this.playerObj = new YT.Player(this.playerId, {
                height: this.height,
                width: this.width,
                videoId: this.videoId
            });
        };
	//var playCommands = {"playVideo":this.playerObj.playVideo(),"pauseVideo":this.playerObj.pauseVideo(),"stopVideo":this.playerObj.stopVideo()};
	//for (var cmd in playCommands) {
	//	ytplayer[cmd] = function() {
	//		playCommands[cmd];
	//	}
	//}
        return ytplayer;
    }])
    .factory('youtubeData', ['$http', function($http){
    	var _params = {
        	key: "AIzaSyDEIWpqZHCrlzvspc9Gi7CGDdQSBwXE3N4"
    	};
    	var endpoints = ["activities","channels","guideCategories","playlistItems","playlists","search","subscriptions","videoCategories","videos"];
    	var api="https://www.googleapis.com/youtube/v3/";
    	var yt_resource = {"api":api};
    	angular.forEach(endpoints, function(v,k) {
        	yt_resource[v] = function(query, parameters) {
           		var config = {
            			params: angular.extend(angular.copy(_params), parameters)
           		};
        	return $http.get(api + v +"?", config);
        	};
    	});
    	return yt_resource;
     }]);
