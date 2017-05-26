'use strict';
var menuController = angular.module('comum.menu.controller', []);

menuController.controller('menuCtrl', ['$scope',function ($scope) {

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
        },
        {
            title: 'Equipes',
            icon: 'group',
            link: 'in.equipe.pesquisa'
        },

        {
            title: 'Propostas',
            icon: 'menu',
            link: 'in.proposta.pesquisa'
        }
    ];

}])
;

