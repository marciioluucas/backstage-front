var comumController = angular.module('comum.controller', []);

comumController.controller('comumCtrl',
    ['$scope', function ($scope) {
        $scope.alturaTela = function(){
            return {height: window.innerHeight - 112 + "px"}}
    }]);