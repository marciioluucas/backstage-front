'use strict';
angular.module('app.dialog.factory', [])
    .factory('$backstageDialog', ['$mdDialog', function ($mdDialog, dialogCtrl) {
        var dialog = {};
        return {
            renderDialog: function (ev) {
                $mdDialog.show({
                    controller: dialogCtrl,
                    templateUrl: 'app/application/dialog/dialog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                });
            },
            renderConfirmDialog: function
                (ev, title, text, aria, okLabel, cancelLabel, qndConfirma, qndCancela) {
                var confirm = $mdDialog.confirm()
                    .title(title)
                    .textContent(text)
                    .ariaLabel(aria)
                    .targetEvent(ev)
                    .ok(okLabel)
                    .cancel(cancelLabel);
                $mdDialog.show(confirm).then(function () {
                    qndConfirma();
                }, function() {
                    qndCancela();
                })

            },
            addTitulo: function (titulo) {
                dialog.titulo = titulo;
            },
            addController: function (controller) {
                dialog.controller = controller;
            },
            addConteudo: function (conteudo) {
                dialog.conteudo = conteudo;
            },
            getDialog: function () {
                return dialog;
            }
        };
    }]);