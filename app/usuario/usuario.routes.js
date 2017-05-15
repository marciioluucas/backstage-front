var usuarioRoutes = angular.module('usuario.routes', ['ui.router']);

usuarioRoutes.config(function ($stateProvider) {

    $stateProvider

        .state('in.usuario.pesquisa',
            {
                parent: 'in.usuario',
                url: "/pesquisar",
                views: {
                    "pesquisar": {
                        templateUrl: "app/usuario/retreave/retreave.html",
                        controller: 'usuarioRetreaveCtrl'
                    }
                }
            })
        .state('in.usuario.cadastrar',
            {
                parent: 'in.usuario',
                url: "/cadastrar",
                views: {
                    "cadastro": {
                        templateUrl: "app/usuario/create/cadastro.html",
                        controller : 'dashboardCtrl'
                    }
                }
            })

        .state('in.usuario.alterar',
            {
                parent: 'in.usuario',
                url: '/alterar/{id}/',
                controller: 'usuarioUpdateCtrl',
                views: {
                    "pesquisar": {
                        templateUrl: "app/usuario/retreave/retreave.html",
                        controller: 'usuarioRetreaveCtrl'
                    }
                }
            })
});