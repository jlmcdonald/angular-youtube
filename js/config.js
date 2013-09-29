'use strict';

if(APIDEMO_CONFIG === undefined) {
  var APIDEMO_CONFIG = angular.module('apiDemo.config', []).
  factory('appConfig', ['youtubeKey','freebaseKey',function(youtubeKey,freebaseKey) {
    return {
      youtubeKey: youtubeKey,
      freebaseKey: freebaseKey
    };
  }]);
}

APIDEMO_CONFIG.
  value('youtubeKey', 'YOUR_YOUTUBE_KEY').
  value('freebaseKey', 'YOUR_FREEBASE_KEY');
