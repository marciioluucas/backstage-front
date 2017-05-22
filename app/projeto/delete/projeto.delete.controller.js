/**
 * Created by juane on 19/05/2017.
 */
var projetoDeleteController = angular.module('projeto.delete.controller', []);

projetoDeleteController.controller('projetoDeleteCtrl',
    ['$scope', '$backstageDialog', '$backstageToast', '$state', 'projetoFactory',
        function ($scope, $backstageDialog, $backstageToast, $state, projetoFactory) {
            var params = [];


            $scope.excluir = function (evento) {
                angular.element(document).ready(function () {

                    params.push("pk_projeto=" + $state.params.id);
                    // alert($stateParams.id);
                });
                $backstageDialog.renderConfirmDialog(
                    evento,
                    'Tem certeza?',
                    'Tem certeza que deseja excluir este projeto?',
                    'Confirmar exclusão do projeto',
                    'Claro!',
                    'Não, foi um engano.',
                    function () {

                        projetoFactory.destroy(params).remove()
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
