var propostaDeleteController = angular.module('proposta.delete.controller', []);

propostaDeleteController.controller('propostaDeleteCtrl',
    ['$scope', '$backstageDialog', '$backstageToast', '$state', 'propostaFactory',
        function ($scope, $backstageDialog, $backstageToast, $state, propostaFactory) {
        var params = [];


        $scope.excluir = function (evento) {
            angular.element(document).ready(function () {

                params.push("pk_proposta=" + $state.params.id);
                // alert($stateParams.id);
            });
            $backstageDialog.renderConfirmDialog(
                evento,
                'Tem certeza?',
                'Tem certeza que deseja excluir esta proposta?',
                'Confirmar exclusão da Proposta',
                'Claro!',
                'Não, foi um engano.',
                function () {

                    propostaFactory.destroy(params).remove()
                        .$promise.then(
                        function (value) {
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