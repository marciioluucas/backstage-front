var usuarioRetreaveController = angular.module('usuario.retreave.controller', []);

usuarioRetreaveController.controller('usuarioRetreaveCtrl',
    ['$scope', 'usuarioFactory', function ($scope, usuarioFactory, $mdToast) {
        $scope.confTabela = {};

        $scope.buscar = function () {

            var params = [];
            if ($scope.nome !== undefined && $scope.nome !== '') {
                params.push("nome=" + $scope.nome);
            }
            if ($scope.email !== undefined  && $scope.email !== '') {
                params.push("email=" + $scope.email);
            }
            if ($scope.matricula !== undefined && $scope.matricula !== '') {
                params.push("matricula=" + $scope.matricula);
            }
            if ($scope.login !== undefined  && $scope.login !== '') {
                params.push("login=" + $scope.login);
            }

           $scope.users = usuarioFactory.get(params).query(function () {
            });
        };


    }]);