var loginController = angular.module('usuario.login.controller', []);
loginController.controller('usuarioLoginCtrl', ['$scope', '$location', 'usuarioFactory',
    function ($scope, $location, usuarioFactory) {

    var bate = false;
    $scope.logar = function () {
        bate = true;
        if (bate) {
            $location.path("/comum/welcome");
        } else {
            $location.path('/acesso-negado');
        }

    };
}]);
