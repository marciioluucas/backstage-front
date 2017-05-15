angular.module('app.dialog.factory', [])
    .factory('$backstageDialog', ['$mdDialog', function ($mdDialog, dialogCtrl) {
        var dialog = {};
        return {
            renderDialog: function (ev, conteudo, titulo) {
                $mdDialog.show({
                    controller: dialogCtrl,
                    templateUrl: 'app/application/dialog/dialog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                });
            },
            addTitulo : function (titulo) {
                dialog.titulo = titulo;
            },
            addController : function (controller) {
                dialog.controller = controller;
            },
            addConteudo : function(conteudo) {
                dialog.conteudo = conteudo;
            },
            getDialog: function() {
                return dialog;
            }
        };
    }]);