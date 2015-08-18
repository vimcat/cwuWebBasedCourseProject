(function() {
    'use strict';

    angular
        .module('pmGroupProject')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('home.tips', {
                url: '/tips',
                views: {
                    "main": {
                        templateUrl: 'app/main/partials/tips.html'
                    },
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();