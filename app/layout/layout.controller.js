var layoutController = angular.module('layout.controller', []);

layoutController.controller('layoutCtrl',
    ['$scope','$state', '$localStorage', function ($scope, $state, $localStorage) {

        $scope.protect = function () {
            console.log($localStorage);
            if ($localStorage.usuarioLogado.nivel < 2) {
                $state.go('login')
            } else {

                if ($localStorage.usuarioLogado !== 'undefined') {

                    if ($localStorage.usuarioLogado.token === 'undefined') {
                        $state.go('login');
                    }
                } else {
                    $state.go('login');
                }
            }
        }
    }]);