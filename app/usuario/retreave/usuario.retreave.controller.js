var usuarioRetreaveController = angular.module('usuario.retreave.controller', []);

usuarioRetreaveController.controller('usuarioRetreaveCtrl',
    ['$scope', 'usuarioFactory', function ($scope, usuarioFactory, $mdToast) {
        var params = '';



        $scope.confTabela = {};

        $scope.buscar = function () {

            if ($scope.nome !== undefined) {
                params = "nome=" + $scope.nome;
            }
            if ($scope.email !== undefined) {
                params += "&email=" + $scope.email;
            }
            if ($scope.matricula !== undefined) {
                params += "&matricula=" + $scope.matricula;
            }
           $scope.users = usuarioFactory.get(params).query(function () {

            });
        };


    }]);