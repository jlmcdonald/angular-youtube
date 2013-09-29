angular.module('youtube.api.directives',[])
.directive('youtube', ['youtubePlayer', function (YtPlayerApi) {
        return {
            restrict:'E',
            link:function (scope, element,attrs) {
                YtPlayerApi.setPlayerId(attrs.id);
                YtPlayerApi.setPlayerVars(attrs.autoplay,attrs.controls);
                YtPlayerApi.setVideoId(attrs.src);
            }
        };
    }]);

angular.module('freebase.api',[])
.directive('freebase', ['SuggestWidget', function (FreebaseApi) {
        return {
            restrict:'A',
            link:function (scope, element) {
		// something here
           }
        };
    }]);
