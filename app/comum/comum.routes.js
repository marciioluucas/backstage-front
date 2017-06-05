'use strict';
var comumRoutes = angular.module('comum.routes', ['ui.router', 'ngRoute']);
comumRoutes.config(function ($stateProvider, $urlRouterProvider) {
    // $routeProvider.otherwise('/');
    $urlRouterProvider.otherwise(function() {
        $stateProvider.state.go('login');
    });
    $stateProvider.state('comum',
        {
            name: 'comum',
            url: '/comum',
            abstract: true,
            views: {
                '': {
                    templateUrl: 'app/comum/comum.html'
                }
            }
        })

        .state('comum.home', {
            url: '/',
            parent: 'comum',
            views: {
                'comum@toolbar': {
                    templateUrl: 'app/comum/toolbar/toolbar.html'
                },
                'comum@sidenav': {
                    templateUrl: 'app/comum/sidenav/sidenav.html'
                },
                'comum@content': {
                    templateUrl: 'app/comum/content/content.html'
                },
                'comum@menu': {
                    templateUrl: 'app/comum/menu/menu.html'
                }
            }
        })

        .state('comum.welcome',
            {
                parent: 'comum.home',
                url: "welcome",
                views: {
                    "navigation": {
                        templateUrl: "app/welcome/welcome.html",
                        controller: 'welcomeCtrl'
                    }
                }
            })

        .state('comum.curtir',
            {
                parent: 'comum.home',
                url: "curtir",
                views: {
                    "navigation": {
                        templateUrl: "app/proposta/curtir/curtir.html",
                        controller: 'propostaCurtirCtrl'
                    }
                }
            })
        .state('comum.minhas',
            {
                parent: 'comum.home',
                url: "minhas-propostas",
                views: {
                    "navigation": {
                        templateUrl: "app/proposta/minhas/minhas.html",
                        controller: 'propostaMinhasCtrl'
                    }
                }
            })

        .state('comum.create',
            {
                parent: 'comum.home',
                url: "criar",
                views: {
                    "navigation": {
                        templateUrl: "app/proposta/create/cadastro.html",
                        controller: 'propostaCreateCtrl'
                    }
                }
            })
});
comumRoutes.run(function ($localStorage, $injector) {
    var $state = $injector.get('$state');
    if($localStorage.token === undefined){
        $state.go('login');
    }
});