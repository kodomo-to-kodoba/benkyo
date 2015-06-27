angular
  .module('Benkyo', ['ngMaterial',
    'ngSanitize',
    'pascalprecht.translate'
  ])
  .config(['$logProvider',
    '$translateProvider',
    function($logProvider, $translateProvider) {
      $translateProvider
        .translations('deu', {
          benkyo: {
            imprint: 'Impressum',
            language: 'Sprache',
            learn: 'Lernen',
            practice: 'Üben',
            score: 'Auswertung',
            settings: 'Einstellungen'
          }
        })
        .translations('eng', {
          benkyo: {
            imprint: 'Imprint',
            language: 'Language',
            learn: 'Learn',
            practice: 'Practice',
            score: 'Score',
            settings: 'Settings'
          }
        })
        .translations('jpn', {
          benkyo: {
            imprint: '奥付',
            language: '言葉',
            learn: '勉強',
            practice: '習う',
            score: '点数',
            settings: '設定'
          }
        })
        .preferredLanguage('deu')
        .useSanitizeValueStrategy('sanitizeParameters');
    }
  ])
  .controller('AppCtrl', function($scope, $timeout, $mdSidenav, $mdUtil, $log) {

  })
  .controller('MenuCtrl', function($scope, $timeout, $mdSidenav, $log) {

  })
  .controller('LangCtrl', function($scope, $translate) {
    $scope.changeLang = function(key) {
      $translate.use(key);
    };
  });
