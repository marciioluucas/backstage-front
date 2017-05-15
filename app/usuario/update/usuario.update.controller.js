var usuarioUpdateController = angular.module('usuario.update.controller', []);

usuarioUpdateController.controller('usuarioUpdateCtrl', ['$scope'
    , 'usuarioFactory', '$backstageToast', '$backstageDialog', '$stateParams',

    function ($scope, usuarioFactory, $backstageToast, $backstageDialog,$stateParams) {

        $scope.editar = function (evento) {
            resgatarInfos($stateParams.id);
            $backstageDialog.addConteudo('app/usuario/update/alterar.html');
            $backstageDialog.addController('usuarioUpdateCtrl');
            $backstageDialog.addTitulo('Alteração de usuário');
            $backstageDialog.renderDialog(evento, 'app/usuario/update/alterar.html', 'Alteração de usuário')

        };
        var params = [];

         function resgatarInfos(id) {
            params.push("pk_usuario=" + id);
           var t = usuarioFactory.get(params).get();
           $scope.nome = t.nome;
           console.log($scope.nome);

        }

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
    }]);