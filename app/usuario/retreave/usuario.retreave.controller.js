var usuarioRetreaveController = angular.module('usuario.retreave.controller', []);

usuarioRetreaveController.controller('usuarioRetreaveCtrl',
    ['$scope','usuarioFactory', function ($scope,usuarioFactory) {
    var params = '';

    $scope.users = {nome: 'nenhum'};
    $scope.buscar = function(){
        if($scope.nome !== undefined){
            params = "nome="+$scope.nome;
        }
        $scope.users = usuarioFactory.get(params).query(function() {
            console.log("OI");
        });
    }

}]);