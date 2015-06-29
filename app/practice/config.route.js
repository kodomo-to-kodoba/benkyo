(function() {
  'use strict';

  angular.module('app.practice')
    .config(configureStates);

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {
    $stateProvider
      .state('practice', {
        url: '/practice',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html'
          },
          'content': {
            templateUrl: 'app/practice/practice.html'
          }
        }
      });
  }

})();
