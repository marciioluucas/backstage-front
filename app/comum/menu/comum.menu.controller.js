'use strict';
var menuController = angular.module('comum.menu.controller', []);

menuController.controller('comumMenuCtrl', ['$scope',function ($scope) {
    $scope.menus = [
        {
            title: 'Dashboard',
            icon: 'menu',
            link: 'comum.welcome'
        },
        {
            title: 'Curtir propostas',
            icon: 'favorite',
            link: 'comum.curtir'
        },
        {
            title: 'Minhas propostas',
            icon: 'assignment_turned_in',
            link: 'comum.minhas'
        }
    ];

}])
;

