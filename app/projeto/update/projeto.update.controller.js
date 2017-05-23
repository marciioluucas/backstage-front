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
                $scope.projeto.nome = data.nome;
                $scope.projeto = {
                    pk_projeto: data.pk_projeto,
                    nome: data.nome,
                    email: data.email,
                    matricula: data.matricula,
                    nivel: data.nivel,
                    login: data.login,
                    senha: data.senha
                };
                console.log(data);
            });

            $scope.projeto.nome = us.nome;
            $scope.projeto.email = us.email;
        });

        $scope.enviar = function () {

            console.log($scope.projeto);

            var params = [];
            if ($scope.projeto.pk_projeto !== undefined) {
                params.push("pk_projeto=" + encodeURI($scope.projeto.pk_projeto));
            }

            if ($scope.projeto.nome !== undefined) {

                params.push("nome=" + encodeURI($scope.projeto.nome));
            }
            if ($scope.projeto.email !== undefined) {
                params.push("email=" + encodeURI($scope.projeto.email));
            }
            if ($scope.projeto.matricula !== undefined) {
                params.push("matricula=" + encodeURI($scope.projeto.matricula));
            }
            if ($scope.projeto.senha !== undefined) {
                params.push("senha=" + encodeURI($scope.projeto.senha));
            }
            if ($scope.projeto.matricula !== undefined) {
                params.push("login=" + encodeURI($scope.projeto.matricula));
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