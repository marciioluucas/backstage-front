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

            if (usuario.nome !== undefined) {
                params = "nome=" + $scope.usuario.nome;
            }
            if (usuario.email !== undefined) {
                params += "&email=" + $scope.usuario.email;
            }
            if (usuario.matricula !== undefined) {
                params += "&matricula=" + $scope.usuario.matricula;
            }
            if (usuario.senha !== undefined) {
                params += "&senha=" + $scope.usuario.senha;
            }
            if (usuario.matricula !== undefined) {
                params += "&login=" + $scope.usuario.matricula;
            }

            usuarioFactory.add(encodeURI(params)).save()
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