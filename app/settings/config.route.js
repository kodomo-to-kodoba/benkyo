(function() {
  'use strict';

  var settings = angular.module('app.settings');

  settings.config(configureStates);

  configureStates.$inject = ['$stateProvider',
    '$urlRouterProvider'
  ];

  function configureStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('settings', {
        url: '/settings',
        views: {
          'menu': {
            templateUrl: 'app/menu/menu.html'
          },
          'content': {
            templateUrl: 'app/settings/settings.html'
          }
        }
      });

    $urlRouterProvider.otherwise("/settings");
  }

})();
