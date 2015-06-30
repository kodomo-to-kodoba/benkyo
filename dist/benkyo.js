(function() {
  'use strict';

  angular.module('app', [
    'app.core',
    'app.menu',
    'app.learn',
    'app.practice',
    'app.score',
    'app.settings',
    'app.imprint'
  ]);

})();

(function() {
  'use strict';

  angular.module('app.core', [
    /*
     * Angular modules
     */
    'ngMaterial',
    'ngSanitize',

    /*
     * 3rd Party modules
     */
    'pascalprecht.translate',
    'ui.router'
  ]);
})();

(function() {
  'use strict';

  angular.module('app.learn', []);

})();

(function() {
  'use strict';

  angular.module('app.menu', []);
})();

(function() {
  'use strict';

  angular.module('app.practice', []);

})();

(function() {
  'use strict';

  angular.module('app.settings', []);

})();

(function() {
  'use strict';

  angular.module('app.score', []);

})();

(function() {
  'use strict';

  angular.module('app.imprint', []);

})();

(function() {
  'use strict';

  var core = angular.module('app.core');

  core.config(configureTranslate);

  function configureTranslate($translateProvider) {
    $translateProvider
      .preferredLanguage('deu')
      .useSanitizeValueStrategy('sanitizeParameters');
  }

  configureTranslate.$inject = ['$translateProvider'];
})();

(function() {
  'use strict';

  angular.module('app.core')
    .config(configureStates);

  configureStates.$inject = ['$urlRouterProvider'];

  function configureStates($urlRouterProvider) {
    $urlRouterProvider.otherwise('/settings');
  }

})();

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

(function() {
  'use strict';

  var settings = angular.module('app.settings');

  settings.config(configureStates);

  configureStates.$inject = ['$stateProvider'];

  function configureStates($stateProvider) {
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
  }

})();

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

(function() {
  'use strict';

  angular
    .module('app.menu')
    .controller('MenuController', MenuController);

  function MenuController() {

  }

})();

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
