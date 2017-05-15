angular.module('app.dialog.controller', [])
    .controller('dialogCtrl', ['$scope','$backstageDialog', function ($scope, $backstageDialog) {
       $scope.titulo = $backstageDialog.getDialog().titulo;
       $scope.conteudo = $backstageDialog.getDialog().conteudo;
       $scope.controller = $backstageDialog.getDialog().controller;
    }
    ]);