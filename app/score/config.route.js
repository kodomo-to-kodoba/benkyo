(function() {
  'use strict';

  angular.module('app.score')
    .config(configureStates);

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {
    $stateProvider
      .state('score', {
        url: '/score',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html'
          },
          'content': {
            templateUrl: 'app/score/score.html'
          }
        }
      });
  }

})();
