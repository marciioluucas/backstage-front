angular.module('app.dialog.factory', [])
    .factory('$backstageDialog', ['$scope', '$mdDialog', 'dialogCtrl', function ($scope, $mdDialog, dialogCtrl) {
        var dialog = {};
        return {
            renderDialog: function (ev) {
                $mdDialog.show({
                    controller: dialogCtrl,
                    templateUrl: 'app/application/dialog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                });
            },
            addTitulo : function (titulo) {
                dialog.titulo = titulo;
            },
            addConteudo : function(conteudo) {
                dialog.conteudo = conteudo;
            },
            getDialog: function() {
                return dialog;
            }
        };
    }]);