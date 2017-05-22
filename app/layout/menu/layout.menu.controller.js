'use strict';
var menuController = angular.module('layout.menu.controller', []);

menuController.controller('menuCtrl', ['$scope',function ($scope) {

    $scope.menus = [
        {
            title: 'Dashboard',
            icon: 'menu',
            link: 'in.dashboard'
        },
        {
            title: 'Usuarios',
            icon: 'person',
            link: 'in.usuario.pesquisa'
        },
        {
            title: 'Projetos',
            icon: 'check',
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

