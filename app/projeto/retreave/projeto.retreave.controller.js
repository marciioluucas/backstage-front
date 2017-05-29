var projetoRetreaveController = angular.module('projeto.retreave.controller', []);

projetoRetreaveController.controller('projetoRetreaveCtrl',
    ['$scope', 'projetoFactory', '$backstageDialog', '$state',
        function ($scope, projetoFactory, $backstageDialog, $state) {
            $scope.mostrarTabela = false;
            $scope.editar = function (evento) {
                $backstageDialog.addConteudo('app/projeto/update/ver.html');
                $backstageDialog.addController('projetoUpdateCtrl');
                $backstageDialog.addTitulo('Alteração de projeto');
                $backstageDialog.renderDialog(evento, 'app/projeto/update/ver.html', 'Alteração de projeto')
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

                    $scope.users = projetoFactory.get(params).query(function () {
                    $scope.mostrarTabela = true;
                    $scope.mostrarProgress = false;
                });
            };


        }]);