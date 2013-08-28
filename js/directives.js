angular.module('youtube.api',[])
.directive('youtube', ['YoutubePlayer', function (YtPlayerApi) {
        return {
            restrict:'A',
            link:function (scope, element) {
                YtPlayerApi.setPlayerId(element[0].id);
            }
        };
    }]);
