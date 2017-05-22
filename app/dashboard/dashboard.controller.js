'use strict';
var dashboardController = angular.module('dashboard.controller', []);

dashboardController.controller('dashboardCtrl', ['$scope', 'dashboardFactory', function ($scope, dashboardFactory) {


    var usuariosAtivos = dashboardFactory.getUsersAtivos.query(function () {
        $scope.labels = ["Usuários Ativos", "Usuários Inativos"];
       var usuariosInativos = dashboardFactory.getUsersInativos.query(function () {
            $scope.data = [usuariosAtivos.length, usuariosInativos.length];
        });

    });

    $scope.labels2 = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data2 = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
}]);