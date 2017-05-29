var equipeRetreaveController = angular.module('equipe.retreave.controller', []);

equipeRetreaveController.controller('equipeRetreaveCtrl',
    ['$scope', 'equipeFactory', '$backstageDialog', '$state',
        function ($scope, equipeFactory, $backstageDialog, $state) {
            $scope.mostrarTabela = false;
            $scope.editar = function (evento) {
                $backstageDialog.addConteudo('app/equipe/update/ver.html');
                $backstageDialog.addController('equipeUpdateCtrl');
                $backstageDialog.addTitulo('Alteração de equipe');
                $backstageDialog.renderDialog(evento, 'app/equipe/update/ver.html', 'Alteração de equipe')
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

                    $scope.users = equipeFactory.get(params).query(function () {
                    $scope.mostrarTabela = true;
                    $scope.mostrarProgress = false;
                });
            };


        }]);