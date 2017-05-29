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


});