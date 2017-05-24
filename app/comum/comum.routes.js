'use strict';
var comumRoutes = angular.module('comum.routes', ['ui.router']);
comumRoutes.config(function ($stateProvider) {

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

        .state('comum.usuario',
            {
                parent: 'comum.home',
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

        .state('comum.dashboard',
            {
                parent: 'comum.home',
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


        .state('comum.equipe',
            {
                parent: 'comum.home',
                url: "equipe",
                views: {
                    "navigation": {
                        templateUrl: "app/equipe/equipe.html",
                        controller : 'equipeCtrl'
                    }
                }
            })

        .state('comum.proposta',
            {
                parent: 'comum.home',
                url: "proposta",
                views: {
                    "navigation": {
                        templateUrl: "app/proposta/proposta.html",
                        controller : 'propostaCtrl'
                    }
                }
            })
        .state('comum.projeto',
            {
                parent: 'comum.home',
                url: "projeto",
                views: {
                    "navigation": {
                        templateUrl: "app/projeto/projeto.html"
                        // controller : 'projetoCtrl'
                    }
                }
            });
});