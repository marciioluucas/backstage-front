'use strict';
var comumToolbarController = angular.module('comum.toolbar.controller', []);
comumToolbarController.controller('comumToolbarCtrl', ['$scope', '$backstageDialog', function ($scope, $backstageDialog) {

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