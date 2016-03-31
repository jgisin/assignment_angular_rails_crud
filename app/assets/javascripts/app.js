pinBoard = angular.module('pinBoard', ['ui.router', 'restangular'])

    .config(['RestangularProvider', function(RestangularProvider){
        RestangularProvider.setBaseUrl('/api/v1');
        RestangularProvider.setRequestSuffix('.json');
    }])

    .config(['$urlRouterProvider', '$stateProvider',
        function($urlRouterProvider, $stateProvider){
            console.log('Angular Running');
          $stateProvider
              .state('index', {
                      url: '/',
                      templateUrl: 'templates/index.html'
                  }
              )
        }])

    .run(function($rootScope){
        $rootScope.$on("$stateChangeError", console.log.bind(console));
    });