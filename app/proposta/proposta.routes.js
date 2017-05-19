var propostaRoutes = angular.module('proposta.routes', ['ui.router']);

propostaRoutes.config(function ($stateProvider) {

    $stateProvider

        .state('in.proposta.pesquisa',
            {
                parent: 'in.proposta',
                url: "/pesquisar",
                views: {
                    "pesquisar": {
                        templateUrl: "app/proposta/retreave/retreave.html",
                        controller: 'propostaRetreaveCtrl'
                    }
                }
            })
        .state('in.proposta.cadastrar',
            {
                parent: 'in.proposta',
                url: "/cadastrar",
                views: {
                    "cadastro": {
                        templateUrl: "app/proposta/create/cadastro.html",
                        controller: 'propostaCreateCtrl'
                    }
                }
            })

        .state('in.proposta.alterar',
            {
                parent: 'in.proposta',
                url: '/alterar/{id}/',
                controller: 'propostaUpdateCtrl',
                views: {
                    "pesquisar": {
                        templateUrl: "app/proposta/retreave/retreave.html"
                    }
                }
            })
        .state('in.proposta.excluir',
            {
                parent: 'in.proposta',
                url: '/excluir/{id}/',
                controller: 'propostaDeleteCtrl',
                views: {
                    "pesquisar": {
                        templateUrl: "app/proposta/retreave/retreave.html"
                    }
                }
            })
});