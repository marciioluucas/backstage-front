'use strict';
var layoutToolbarController = angular.module('layout.toolbar.controller', []);
layoutToolbarController.controller('layoutToolbarCtrl', ['$scope', '$backstageDialog', function ($scope, $backstageDialog) {

    $scope.openMenu = function ($mdMenu, ev) {
        $mdMenu.open(ev);
    };

    $scope.openHelpDialog = function (evento) {
        $backstageDialog.addConteudo('app/help/help.html');
        $backstageDialog.addController('helpCtrl');
        $backstageDialog.addTitulo('Ajuda');
        $backstageDialog.renderDialog(evento, 'app/help/help.html', 'Ajuda');
    };
}]);