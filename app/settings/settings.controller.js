(function() {
  'use strict';

  angular
    .module('app.settings')
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = ['$scope',
    '$translate'
  ];

  function SettingsController($scope, $translate) {
    $scope.changeLang = function(key) {
      $translate.use(key);
    };
  }

})();
