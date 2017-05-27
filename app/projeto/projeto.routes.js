var projetoRoutes = angular.module('projeto.routes', ['ui.router']);

projetoRoutes.config(function ($stateProvider) {

    $stateProvider

        .state('in.projeto.pesquisa',
            {
                parent: 'in.projeto',
                url: "/pesquisar",
                views: {
                    "pesquisar": {
                        templateUrl: "app/projeto/retreave/minhas.html",
                        controller: 'projetoRetreaveCtrl'
                    }
                }
            })
        .state('in.projeto.cadastrar',
            {
                parent: 'in.projeto',
                url: "/cadastrar",
                views: {
                    "cadastro": {
                        templateUrl: "app/projeto/create/cadastro.html",
                        controller: 'projetoCreateCtrl'
                    }
                }
            })

        .state('in.projeto.alterar',
            {
                parent: 'in.projeto',
                url: '/alterar/{id}/',
                controller: 'projetoUpdateCtrl',
                views: {
                    "pesquisar": {
                        templateUrl: "app/projeto/retreave/minhas.html"
                    }
                }
            })
        .state('in.projeto.excluir',
            {
                parent: 'in.projeto',
                url: '/excluir/{id}/',
                controller: 'projetoDeleteCtrl',
                views: {
                    "pesquisar": {
                        templateUrl: "app/projeto/retreave/minhas.html"
                    }
                }
            })
});