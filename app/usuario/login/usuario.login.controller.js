var loginController = angular.module('usuario.login.controller', []);
loginController.controller('usuarioLoginCtrl', ['$scope', '$location', 'usuarioFactory',
    function ($scope, $location, usuarioFactory) {

    $scope.usuarios = usuarioFactory.usuarios();
    $scope.user = {};

    var bate = false;
    $scope.logar = function () {
        for (i = 0; i < $scope.usuarios.length; i++) {
            if ($scope.email === $scope.usuarios[i].email && $scope.senha === $scope.usuarios[i].senha) {
                bate = true;
                $scope.user = $scope.usuarios[i];
                usuarioFactory.setUsuario($scope.usuarios[i]);
            }
        }
        if (bate) {
            $location.path("/in/dashboard");
        } else {
            $location.path('/acesso-negado');
        }

    };
}]);
