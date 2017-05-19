var equipeDeleteController = angular.module('equipe.delete.controller', []);

equipeDeleteController.controller('equipeDeleteCtrl',
    ['$scope', '$backstageDialog', '$backstageToast', '$state', 'equipeFactory',
        function ($scope, $backstageDialog, $backstageToast, $state, equipeFactory) {
        var params = [];


        $scope.excluir = function (evento) {
            angular.element(document).ready(function () {

                params.push("pk_equipe=" + $state.params.id);
                // alert($stateParams.id);
            });
            $backstageDialog.renderConfirmDialog(
                evento,
                'Tem certeza?',
                'Tem certeza que deseja excluir esta equipe?',
                'Confirmar exclusão da equipe',
                'Claro!',
                'Não, foi um engano.',
                function () {

                    equipeFactory.destroy(params).remove()
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