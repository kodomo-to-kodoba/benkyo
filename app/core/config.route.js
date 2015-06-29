(function() {
  'use strict';

  angular.module('app.core')
    .config(configureStates);

  configureStates.$inject = ['$urlRouterProvider'];

  function configureStates($urlRouterProvider) {
    $urlRouterProvider.otherwise('/settings');
  }

})();
