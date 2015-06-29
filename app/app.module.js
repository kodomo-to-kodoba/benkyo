(function() {
  'use strict';

  angular.module('app', [
    'app.core',
    'app.menu'
  ])
    .controller('LangCtrl', function($scope, $translate) {
      $scope.changeLang = function(key) {
        $translate.use(key);
      };
    });

})();
