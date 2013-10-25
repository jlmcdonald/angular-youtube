angular.module('youtube.api.directives',[])
.directive('youtube', ['youtubePlayer', function (YtPlayerApi) {
        return {
            restrict:'E',
            link:function (scope, element,attrs) {
                YtPlayerApi.setPlayerId(attrs.id);
		player_vars={};
		allowed_vars=["autoplay","controls","html5"];
		for (var idx in allowed_vars) {
			if (allowed_vars[idx] in attrs) {
				player_vars[allowed_vars[idx]]=attrs[allowed_vars[idx]];
			}
		}
                YtPlayerApi.setPlayerVars(player_vars);
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
