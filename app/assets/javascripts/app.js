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
                      url: '/pins',
                      templateUrl: 'templates/index.html',
                      controller: 'PinCtrl'
                  }
              )
              .state('show', {
                      url: '/pins/:id',
                      templateUrl: 'templates/show.html',
                      controller: 'PinCtrl'
                  }
              )
              .state('edit', {
                      url: '/pins/:id/edit',
                      templateUrl: 'templates/edit.html',
                      controller: 'PinCtrl'
                  }
              )
    }])

    .run(function($rootScope){
        $rootScope.$on("$stateChangeError", console.log.bind(console));
    });