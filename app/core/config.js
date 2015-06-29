(function() {
  'use strict';

  var core = angular.module('app.core');

  core.config(configureTranslate);

  function configureTranslate($translateProvider) {
    $translateProvider
      .preferredLanguage('deu')
      .useSanitizeValueStrategy('sanitizeParameters');
  }

  configureTranslate.$inject = ['$translateProvider'];
})();
