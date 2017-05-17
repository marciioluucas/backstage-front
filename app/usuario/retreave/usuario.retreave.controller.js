var usuarioRetreaveController = angular.module('usuario.retreave.controller', []);

usuarioRetreaveController.controller('usuarioRetreaveCtrl',
    ['$scope', 'usuarioFactory', '$backstageDialog', '$state',
        function ($scope, usuarioFactory, $backstageDialog, $state) {
            $scope.mostrarTabela = false;
            $scope.editar = function (evento) {
                $backstageDialog.addConteudo('app/usuario/update/alterar.html');
                $backstageDialog.addController('usuarioUpdateCtrl');
                $backstageDialog.addTitulo('Alteração de usuário');
                $backstageDialog.renderDialog(evento, 'app/usuario/update/alterar.html', 'Alteração de usuário')
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

                    $scope.users = usuarioFactory.get(params).query(function () {
                    $scope.mostrarTabela = true;
                    $scope.mostrarProgress = false;
                });
            };


        }]);