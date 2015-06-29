(function() {
  'use strict';

  angular.module('app.imprint')
    .config(configureStates);

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {
    $stateProvider
      .state('imprint', {
        url: '/imprint',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html'
          },
          'content': {
            templateUrl: 'app/imprint/imprint.html'
          }
        }
      });
  }

})();
