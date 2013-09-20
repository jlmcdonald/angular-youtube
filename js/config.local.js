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
  value('youtubeKey', 'AIzaSyDEIWpqZHCrlzvspc9Gi7CGDdQSBwXE3N4').
  value('freebaseKey', 'AIzaSyCooRtA_OPG1BUT9yDAqJ2mP3MSk8B-kSg');
