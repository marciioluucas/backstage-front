var comumController = angular.module('comum.controller', []);

comumController.controller('comumCtrl',
    ['$scope','$state','$localStorage', function ($scope, $state, $localStorage) {
        $scope.alturaTela = function () {
            return {height: window.innerHeight - 112 + "px"}
        };

        $scope.protect = function () {
            if ($localStorage.usuarioLogado.nivel !== 1) {
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
        };

        $scope.mostraBotaoAdd = function() {
            if($state.current.name === 'comum.create'){
                return true
            }else{
                return false
            }
        }
    }]);