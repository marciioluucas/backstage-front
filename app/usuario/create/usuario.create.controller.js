var usuarioCreateController = angular.module('usuario.create.controller', []);

usuarioCreateController.controller('usuarioCreateCtrl', ['$scope', function ($scope) {


    $scope.enviar = function () {
        var usuario = {
            nome: $scope.usuario.nome,
            email: $scope.usuario.email,
            senha: $scope.usuario.senha,
            nivel: $scope.usuario.nivel,
            matricula: $scope.usuario.matricula
        };
        console.log(usuario);
    }
}]);