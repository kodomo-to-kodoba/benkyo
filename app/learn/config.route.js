(function() {
  'use strict';

  angular.module('app.learn')
    .config(configureStates);

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {
    $stateProvider
      .state('learn', {
        url: '/learn',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html'
          },
          'content': {
            templateUrl: 'app/learn/learn.html'
          }
        }
      });
  }

})();
