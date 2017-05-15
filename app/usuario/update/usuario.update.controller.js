var usuarioUpdateController = angular.module('usuario.update.controller', []);

usuarioUpdateController.controller('usuarioUpdateCtrl', ['$scope'
    , 'usuarioFactory', '$backstageToast', '$backstageDialog', '$state',

    function ($scope, usuarioFactory, $backstageToast, $backstageDialog, $state) {

        var params = [];
        var usuario = {};
        var id = null;
        angular.element(document).ready(function () {
            params.push("pk_usuario=" + $state.params.id);
            usuarioFactory.get(params).get()
                .$promise.then(
                    function (value) {
                        console.log(value);
                        return value;
                    },

                    function (error) {
                        console.log("ERRO: " + error);
                    }
                );
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