/**
 * Created by juane on 19/05/2017.
 */
var projetoUpdateController = angular.module('projeto.update.controller', []);

projetoUpdateController.controller('projetoUpdateCtrl', ['$scope'
    , 'projetoFactory', '$backstageToast', '$backstageDialog', '$state',

    function ($scope, projetoFactory, $backstageToast, $backstageDialog, $state) {

        var params = [];
        var projeto = {};
        $scope.projeto = {};

        var id = null;
        angular.element(document).ready(function () {
            params.push("pk_projeto=" + $state.params.id);
            var us = projetoFactory.get(params).get({}, function (data) {
                $scope.projeto.titulo = data.titulo;
                $scope.projeto = {
                    pk_projeto: data.pk_projeto,
                    titulo: data.titulo,
                    descricao: data.descricao,
                    contagem: data.contagem,
                    data: data.data,
                    fk_proposta: data.fk_proposta,
                    fk_equipe: data.fk_equipe,
                    status: data.status
                };
                console.log(data);
            });

            $scope.projeto.titulo = us.titulo;
            $scope.projeto.fk_proposta = us.fk_proposta;
        });

        $scope.enviar = function () {

            console.log($scope.projeto);

            var params = [];
            if ($scope.projeto.pk_projeto !== undefined) {
                params.push("pk_projeto=" + encodeURI($scope.projeto.pk_projeto));
            }

            if ($scope.projeto.titulo !== undefined) {

                params.push("titulo=" + encodeURI($scope.projeto.titulo));
            }
            if ($scope.projeto.descricao !== undefined) {
                params.push("descricao=" + encodeURI($scope.projeto.descricao));
            }
            if ($scope.projeto.status !== undefined) {
                params.push("status=" + encodeURI($scope.projeto.status));
            }
            if ($scope.projeto.fk_proposta !== undefined) {
                params.push("fk_proposta=" + encodeURI($scope.projeto.fk_proposta));
            }
            if ($scope.projeto.data !== undefined) {
                params.push("data=" + encodeURI($scope.projeto.data));
            }
            if ($scope.projeto.contagem !== undefined) {
                params.push("contagem=" + encodeURI($scope.projeto.contagem));
            }
            // console.log(params);
            projetoFactory.update(params).prototype.$update().then(
                function (value) {
                    return $backstageToast.come(value.extra.icone, value.message);
                },

                function (error) {
                    console.log("ERRO: " + error);
                }
            );
        }
    }])
;
