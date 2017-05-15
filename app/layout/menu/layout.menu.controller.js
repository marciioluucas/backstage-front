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
            link: 'in.usuario.pesquisa'
        },
        {
            title: 'Equipes',
            icon: 'group',
            link: 'in.usuario.pesquisa'
        },
        {
            title: 'Rankings',
            icon: 'menu',
            link: 'in.usuario.pesquisa'
        }
    ];

}])
;

