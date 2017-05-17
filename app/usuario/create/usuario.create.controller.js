var usuarioCreateController = angular.module('usuario.create.controller', []);

usuarioCreateController.controller('usuarioCreateCtrl',
    ['$scope', 'usuarioFactory', '$backstageToast',

    function ($scope, usuarioFactory, $backstageToast) {

        var params = '';

        $scope.enviar = function () {
            var usuario = {
                nome: $scope.usuario.nome,
                email: $scope.usuario.email,
                senha: $scope.usuario.senha,
                nivel: $scope.usuario.nivel,
                matricula: $scope.usuario.matricula
            };
            var params = [];
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

            usuarioFactory.add(params).save()
                .$promise.then(
                function (value) {
                    return $backstageToast.come(value.extra.icone,value.message);
                },

                function (error) {
                    console.log("ERRO: " + error);
                }
            );
        }
    }]);