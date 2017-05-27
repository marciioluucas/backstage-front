'use strict';
var menuController = angular.module('comum.menu.controller', []);

menuController.controller('comumMenuCtrl', ['$scope',function ($scope) {
    $scope.menus = [
        {
            title: 'Dashboard',
            icon: 'menu',
            link: 'in.dashboard'
        },
        {
            title: 'Curtir propostas',
            icon: 'favorite',
            link: 'in.usuario.pesquisa'
        },
        {
            title: 'Minhas propostas',
            icon: 'assignment_turned_in',
            link: 'in.projeto.pesquisa'
        }
    ];

}])
;

