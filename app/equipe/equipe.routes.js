var equipeRoutes = angular.module('equipe.routes', ['ui.router']);

equipeRoutes.config(function ($stateProvider) {

    $stateProvider

        .state('in.equipe.pesquisa',
            {
                parent: 'in.equipe',
                url: "/pesquisar",
                views: {
                    "pesquisar": {
                        templateUrl: "app/equipe/retreave/minhas.html",
                        controller: 'equipeRetreaveCtrl'
                    }
                }
            })
        .state('in.equipe.cadastrar',
            {
                parent: 'in.equipe',
                url: "/cadastrar",
                views: {
                    "cadastro": {
                        templateUrl: "app/equipe/create/cadastro.html",
                        controller: 'dashboardCtrl'
                    }
                }
            })

        .state('in.equipe.alterar',
            {
                parent: 'in.equipe',
                url: '/alterar/{id}/',
                controller: 'equipeUpdateCtrl',
                views: {
                    "pesquisar": {
                        templateUrl: "app/equipe/retreave/minhas.html"
                    }
                }
            })
        .state('in.equipe.excluir',
            {
                parent: 'in.equipe',
                url: '/excluir/{id}/',
                controller: 'equipeDeleteCtrl',
                views: {
                    "pesquisar": {
                        templateUrl: "app/equipe/retreave/minhas.html"
                    }
                }
            })
});