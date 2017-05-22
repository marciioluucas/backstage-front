'use strict';
var usuarioCtrl = angular.module('usuario.controller', []);

usuarioCtrl.controller('usuarioCtrl', ['$scope', function ($scope) {
    $scope.message = "Index do usuario.";
}]);