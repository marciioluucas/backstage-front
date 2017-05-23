var usuarioDeleteController = angular.module('usuario.delete.controller', []);

usuarioDeleteController.controller('usuarioDeleteCtrl',
    ['$scope', '$backstageDialog', '$backstageToast', '$state', 'usuarioFactory',
        function ($scope, $backstageDialog, $backstageToast, $state, usuarioFactory) {
        var params = [];


        $scope.excluir = function (evento, index) {
            angular.element(document).ready(function () {

                params.push("pk_usuario=" + $state.params.id);
                // alert($stateParams.id);
            });
            $backstageDialog.renderConfirmDialog(
                evento,
                'Tem certeza?',
                'Tem certeza que deseja excluir este usuário?',
                'Confirmar exclusão do Usuário',
                'Claro!',
                'Não, foi um engano.',
                function () {

                    usuarioFactory.destroy(params).remove()
                        .$promise.then(
                        function (value) {
                            document.getElementById(index).style.property.display = 'none';
                            return $backstageToast.come(value.extra.icone, value.message);
                        },

                        function (error) {
                            console.log("ERRO: " + error);
                        }
                    );
                }, function () {

                })
        };


    }]);