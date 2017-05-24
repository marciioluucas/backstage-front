'use strict';
var comumRoutes = angular.module('comum.routes', ['ui.router']);
comumRoutes.config(function ($stateProvider) {

    $stateProvider.state('in',
        {
            name: 'in',
            url: '/in',
            abstract: true,
            views: {
                '': {
                    templateUrl: 'app/comum/comum.html'
                }
            }
        })

        .state('in.home', {
            url: '/',
            parent: 'in',
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

        .state('in.usuario',
            {
                parent: 'in.home',
                url: "usuario",
                views: {
                    "navigation": {
                        templateUrl: "app/usuario/usuario.html",
                        controller: 'usuarioCtrl'
                    }
                },
                data : {
                    titulo: 'Usuario'
                }

            })

        .state('in.dashboard',
            {
                parent: 'in.home',
                url: "dashboard",
                views: {
                    "navigation": {
                        templateUrl: "app/dashboard/dashboard.html",
                        controller : 'dashboardCtrl'
                    }
                },
                data : (function() {
                    return {titulo: 'Dashboard'};
                })()
            })


        .state('in.equipe',
            {
                parent: 'in.home',
                url: "equipe",
                views: {
                    "navigation": {
                        templateUrl: "app/equipe/equipe.html",
                        controller : 'equipeCtrl'
                    }
                }
            })

        .state('in.proposta',
            {
                parent: 'in.home',
                url: "proposta",
                views: {
                    "navigation": {
                        templateUrl: "app/proposta/proposta.html",
                        controller : 'propostaCtrl'
                    }
                }
            })
        .state('in.projeto',
            {
                parent: 'in.home',
                url: "projeto",
                views: {
                    "navigation": {
                        templateUrl: "app/projeto/projeto.html"
                        // controller : 'projetoCtrl'
                    }
                }
            });
});