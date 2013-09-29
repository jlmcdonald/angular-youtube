'use strict';

/* Services */

angular.module('youtube.api.services',[]).run(function() {
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    })
    .factory('youtubePlayer', ['$window', '$rootScope', function ($window, $rootScope) {
        $window.onYouTubeIframeAPIReady = function () {
            $rootScope.$broadcast('apiReady');
        };
        var ytplayer = {
		"playerId":null,
		"playerObj":null,
		"videoId":null,
		"autoplay": false,
		"controls": true,
		"height":390,
		"width":640,
		setPlayerId:function(elemId) {
            		this.playerId=elemId;
        	},
		setDimensions:function(width,height) {
	    		this.width=width;
	    		this.height=height;
		},
		setPlayerVars: function(autoplay,controls) {
			this.autoplay=autoplay;
			this.controls=controls;
		},
		setVideoId: function(videoId) {
			this.videoId=videoId;
		},
		loadPlayer:function () {
           		this.playerObj = new YT.Player(this.playerId, {
                		height: this.height,
                		width: this.width,
				playerVars: {
					'autoplay': this.autoplay,
					'controls': this.controls
				},
                		videoId: this.videoId
            		});
        	},
		playVideo:function() {
			this.playerObj.playVideo();
		},
		pauseVideo:function() {
			this.playerObj.pauseVideo();
		},
		stopVideo:function() {
			this.playerObj.stopVideo();
		}
	};
        return ytplayer;
    }])
    .factory('youtubeData', ['$http', function($http){
    	var _params = {
        	key: 'noder'
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
