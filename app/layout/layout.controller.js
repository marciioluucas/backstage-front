var layoutController = angular.module('layout.controller', []);

layoutController.controller('layoutCtrl',
    ['$scope', function ($scope, $state) {

        $scope.protect = function () {
            if (typeof $localStorage.usuarioLogado !== 'undefined') {
            if ($localStorage.usuarioLogado.token === 'undefined') {
                $state.go('login');
            }
        } else {
            $state.go('login');
        }

    }
    }]);