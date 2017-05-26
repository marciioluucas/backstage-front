'use strict';
var welcomeController = angular.module('welcome.controller', []);

welcomeController.controller('welcomeCtrl', ['$scope', 'welcomeFactory', function ($scope, welcomeFactory) {


    var usuariosAtivos = welcomeFactory.getUsersAtivos.query(function () {
        $scope.labels = ["Usuários Ativos", "Usuários Inativos"];
       var usuariosInativos = welcomeFactory.getUsersInativos.query(function () {
            $scope.data = [usuariosAtivos.length, usuariosInativos.length];
        });

    });

    $scope.labels2 = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

    $scope.data2 = [
        [65, 59, 80, 81, 56, 55, 40]

    ];

    var teste =
        {
           0: 15,
           1: 625,
           2: 25,
           3: 11,
           4: 10,
           5: 6
        };
    //Pegar a data atual e diminuir pela index do array que veio do banco!
}]);