(function() {
  'use strict';

  var menu = angular.module('app.menu');

  menu.config(configureTranslations);

  configureTranslations.$inject = ['$translateProvider'];

  function configureTranslations($translateProvider) {
    $translateProvider
      .translations('deu', {
        benkyo: {
          menu: {
            imprint: 'Impressum',
            language: 'Sprache',
            learn: 'Lernen',
            practice: 'Üben',
            score: 'Auswertung',
            settings: 'Einstellungen'
          }
        }
      })
      .translations('eng', {
        benkyo: {
          menu: {
            imprint: 'Imprint',
            language: 'Language',
            learn: 'Learn',
            practice: 'Practice',
            score: 'Score',
            settings: 'Settings'
          }
        }
      })
      .translations('jpn', {
        benkyo: {
          menu: {
            imprint: '奥付',
            language: '言葉',
            learn: '勉強',
            practice: '習う',
            score: '点数',
            settings: '設定'
          }
        }
      });
  }
})();
