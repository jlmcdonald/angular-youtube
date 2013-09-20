angular.module('youtube.api',[])
.directive('youtube', ['youtubePlayer', function (YtPlayerApi) {
        return {
            restrict:'A',
            link:function (scope, element) {
                YtPlayerApi.setPlayerId(element[0].id);
            }
        };
    }]);

angular.module('freebase.api',[])
.directive('freebase', ['SuggestWidget', function (FreebaseApi) {
        return {
            restrict:'A',
            link:function (scope, element) {
                console.log('yo');
            }
        };
    }]);
