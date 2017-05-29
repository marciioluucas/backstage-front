var propostaVerController = angular.module('proposta.ver.controller', []);

propostaVerController.controller('propostaVerCtrl', ['$scope'
    , 'propostaFactory', '$backstageToast', '$backstageDialog', '$state',

    function ($scope, propostaFactory, $backstageToast, $backstageDialog, $state) {

        var params = [];
        var proposta = {};
        $scope.proposta = {};

        var id = null;
        angular.element(document).ready(function () {
            params.push("pk_proposta=" + $state.params.id);
            var us = propostaFactory.get(params).get({}, function (data) {
                $scope.proposta.nome = data.nome;
                $scope.proposta = {
                    pk_proposta: data.pk_proposta,
                    nome: data.nome,
                    email: data.email,
                    matricula: data.matricula,
                    nivel: data.nivel,
                    login: data.login,
                    senha: data.senha
                };
                console.log(data);
            });

            $scope.proposta.nome = us.nome;
            $scope.proposta.email = us.email;
        });

        $scope.enviar = function () {

            console.log($scope.proposta);

            var params = [];
            if ($scope.proposta.pk_proposta !== undefined) {
                params.push("pk_proposta=" + encodeURI($scope.proposta.pk_proposta));
            }

            if ($scope.proposta.nome !== undefined) {

                params.push("nome=" + encodeURI($scope.proposta.nome));
            }
            if ($scope.proposta.email !== undefined) {
                params.push("email=" + encodeURI($scope.proposta.email));
            }
            if ($scope.proposta.matricula !== undefined) {
                params.push("matricula=" + encodeURI($scope.proposta.matricula));
            }
            if ($scope.proposta.senha !== undefined) {
                params.push("senha=" + encodeURI($scope.proposta.senha));
            }
            if ($scope.proposta.matricula !== undefined) {
                params.push("login=" + encodeURI($scope.proposta.matricula));
            }
            // console.log(params);
            propostaFactory.ver(params).prototype.$ver().then(
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