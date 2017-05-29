var propostaRoutes = angular.module('proposta.routes', ['ui.router']);

propostaRoutes.config(function ($stateProvider) {

    $stateProvider

        .state('in.proposta.pesquisa',
            {
                parent: 'in.proposta',
                url: "/pesquisar",
                views: {
                    "navigation": {
                        templateUrl: "app/proposta/retreave/retreave.html",
                        controller: 'propostaRetreaveCtrl'
                    }
                }
            })
        .state('comum.proposta.curtir',
            {
                parent: 'comum.proposta',
                url: "/curtir",
                views: {
                    "navigation": {
                        templateUrl: "app/proposta/curtir/curtir.html",
                        controller: 'propostaCurtirCtrl'
                    }
                }
            })
        .state('comum.proposta.minhas',
            {
                parent: 'comum.proposta',
                url: "/minhas",
                views: {
                    "navigation": {
                        templateUrl: "app/proposta/minhas/minhas.html",
                        controller: 'propostaMinhasCtrl'
                    }
                }
            })
        .state('comum.proposta.create',
            {
                parent: 'comum.proposta',
                url: "/criar",
                views: {
                    "navigation": {
                        templateUrl: "app/proposta/create/cadastro.html",
                        controller: 'propostaCreateCtrl'
                    }
                }
            })


});