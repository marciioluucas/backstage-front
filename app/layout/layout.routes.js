'use strict';
var layoutRoutes = angular.module('layout.routes', ['ui.router']);
layoutRoutes.config(function ($stateProvider) {

    $stateProvider.state('in',
        {
            name: 'in',
            url: '/in',
            abstract: true,
            views: {
                '': {
                    templateUrl: 'app/layout/comum.html'
                }
            }
        })

        .state('in.home', {
            url: '/',
            parent: 'in',
            views: {
                'layout@toolbar': {
                    templateUrl: 'app/layout/toolbar/toolbar.html'
                },
                'layout@sidenav': {
                    templateUrl: 'app/layout/sidenav/sidenav.html'
                },
                'layout@content': {
                    templateUrl: 'app/layout/content/content.html'
                },
                'layout@menu': {
                    templateUrl: 'app/layout/menu/menu.html'
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