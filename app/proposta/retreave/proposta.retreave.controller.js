var propostaRetreaveController = angular.module('proposta.retreave.controller', []);

propostaRetreaveController.controller('propostaRetreaveCtrl',
    ['$scope', 'propostaFactory', '$backstageDialog', '$state',
        function ($scope, propostaFactory, $backstageDialog, $state) {
            $scope.mostrarTabela = false;
            $scope.editar = function (evento) {
                $backstageDialog.addConteudo('app/proposta/update/ver.html');
                $backstageDialog.addController('propostaUpdateCtrl');
                $backstageDialog.addTitulo('Alteração de proposta');
                $backstageDialog.renderDialog(evento, 'app/proposta/update/ver.html', 'Alteração de proposta')
            };


            $scope.buscar = function () {
                $scope.mostrarProgress = true;
                var params = [];
                if ($scope.nome !== undefined && $scope.nome !== '') {
                    params.push("titulo=" + $scope.titulo);
                }

                    $scope.propostas = propostaFactory.get(params).query(function () {
                    $scope.mostrarTabela = true;
                    $scope.mostrarProgress = false;
                });
            };


        }]);