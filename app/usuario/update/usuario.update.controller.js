var usuarioUpdateController = angular.module('usuario.update.controller', []);

usuarioUpdateController.controller('usuarioUpdateCtrl', ['$scope'
    , 'usuarioFactory', '$backstageToast', '$backstageDialog', '$state',

    function ($scope, usuarioFactory, $backstageToast, $backstageDialog, $state) {

        var params = [];
        var usuario = {};
        $scope.usuario = {};

        var id = null;
        angular.element(document).ready(function () {
            params.push("pk_usuario=" + $state.params.id);
            var us = usuarioFactory.get(params).get({}, function (data) {
                $scope.usuario.nome = data.nome;
                $scope.usuario = {
                    pk_usuario: data.pk_usuario,
                    nome: data.nome,
                    email: data.email,
                    matricula: data.matricula,
                    nivel: data.nivel,
                    login: data.login,
                    senha: data.senha
                };
                console.log(data);
            });

            $scope.usuario.nome = us.nome;
            $scope.usuario.email = us.email;
        });

        $scope.enviar = function () {

            var params = [];
            if (usuario.pk_usuario !== undefined) {
                params.push("pk_usuario=" + $scope.usuario.pk_usuario);
            }

            if (usuario.nome !== undefined) {
                params.push("nome=" + $scope.usuario.nome);
            }
            if (usuario.email !== undefined) {
                params.push("email=" + $scope.usuario.email);
            }
            if (usuario.matricula !== undefined) {
                params.push("matricula=" + $scope.usuario.matricula);
            }
            if (usuario.senha !== undefined) {
                params.push("senha=" + $scope.usuario.senha);
            }
            if (usuario.matricula !== undefined) {
                params.push("login=" + $scope.usuario.matricula);
            }

            usuarioFactory.update(params).update()
                .$promise.then(
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