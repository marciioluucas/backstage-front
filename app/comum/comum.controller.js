var comumController = angular.module('comum.controller', []);

comumController.controller('comumCtrl',
    ['$scope', function ($scope) {
        $scope.alturaTela = function () {
            return {height: window.innerHeight - 112 + "px"}
        };

        $scope.protect = function () {
            if (typeof $localStorage.usuarioLogado === 'undefined') {
                $state.go('login');
            } else {
                $state.go('login');
            }

        }
    }]);