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

            console.log($scope.usuario);

            var params = [];
            if ($scope.usuario.pk_usuario !== undefined) {
                params.push("pk_usuario=" + encodeURI($scope.usuario.pk_usuario));
            }

            if ($scope.usuario.nome !== undefined) {

                params.push("nome=" + encodeURI($scope.usuario.nome));
            }
            if ($scope.usuario.email !== undefined) {
                params.push("email=" + encodeURI($scope.usuario.email));
            }
            if ($scope.usuario.matricula !== undefined) {
                params.push("matricula=" + encodeURI($scope.usuario.matricula));
            }
            if ($scope.usuario.senha !== undefined) {
                params.push("senha=" + encodeURI($scope.usuario.senha));
            }
            if ($scope.usuario.matricula !== undefined) {
                params.push("login=" + encodeURI($scope.usuario.matricula));
            }
            // console.log(params);
            usuarioFactory.update(params).prototype.$update().then(
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