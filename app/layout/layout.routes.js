var layoutRoutes = angular.module('layout.routes', ['ui.router']);
layoutRoutes.config(function ($stateProvider) {

    $stateProvider.state('in',
        {
            name: 'in',
            url: '/in',
            abstract: true,
            views: {
                '': {
                    templateUrl: 'app/layout/layout.html'
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
});