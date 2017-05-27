var propostaCurtirController = angular.module('proposta.curtir.controller', []);

propostaCurtirController.controller('propostaCurtirCtrl',
    ['$scope', 'propostaFactory', '$backstageDialog', '$state',
        function ($scope, propostaFactory, $backstageDialog, $state) {
            $scope.mostrarTabela = false;
            $scope.editar = function (evento) {
                $backstageDialog.addConteudo('app/proposta/update/alterar.html');
                $backstageDialog.addController('propostaUpdateCtrl');
                $backstageDialog.addTitulo('Alteração de proposta');
                $backstageDialog.renderDialog(evento, 'app/proposta/update/alterar.html', 'Alteração de proposta')
            };


            $scope.buscar = function () {
                $scope.mostrarProgress = true;
                var params = [];
                if ($scope.nome !== undefined && $scope.nome !== '') {
                    params.push("nome=" + $scope.nome);
                }
                if ($scope.email !== undefined && $scope.email !== '') {
                    params.push("email=" + $scope.email);
                }
                if ($scope.matricula !== undefined && $scope.matricula !== '') {
                    params.push("matricula=" + $scope.matricula);
                }
                if ($scope.login !== undefined && $scope.login !== '') {
                    params.push("login=" + $scope.login);
                }

                    $scope.users = propostaFactory.get(params).query(function () {
                    $scope.mostrarTabela = true;
                    $scope.mostrarProgress = false;
                });
            };


        }]);