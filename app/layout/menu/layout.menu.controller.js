var menuController = angular.module('layout.menu.controller', []);

menuController.controller('menuCtrl', ['$scope',function ($scope) {

    $scope.menus = [
        {
            title: 'Dashboard',
            icon: 'menu',
            link: 'in.dashboard'
        },
        {
            title: 'Usuario',
            icon: 'person',
            link: 'in.usuario.pesquisa'
        }
    ];

}])
;

