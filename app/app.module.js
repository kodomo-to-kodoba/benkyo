(function() {
  'use strict';

  angular.module('app', [
    'app.core',
    'app.menu'
  ])
    .controller('AppCtrl',
    function($scope, $timeout, $mdSidenav, $mdUtil, $log) {

    })
    .controller('LangCtrl', function($scope, $translate) {
      $scope.changeLang = function(key) {
        $translate.use(key);
      };
    });

})();
