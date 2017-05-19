var equipeUpdateController = angular.module('equipe.update.controller', []);

equipeUpdateController.controller('equipeUpdateCtrl', ['$scope'
    , 'equipeFactory', '$backstageToast', '$backstageDialog', '$state',

    function ($scope, equipeFactory, $backstageToast, $backstageDialog, $state) {

        var params = [];
        var equipe = {};
        $scope.equipe = {};

        var id = null;
        angular.element(document).ready(function () {
            params.push("pk_equipe=" + $state.params.id);
            var us = equipeFactory.get(params).get({}, function (data) {
                $scope.equipe.nome = data.nome;
                $scope.equipe = {
                    pk_equipe: data.pk_equipe,
                    nome: data.nome,
                    email: data.email,
                    matricula: data.matricula,
                    nivel: data.nivel,
                    login: data.login,
                    senha: data.senha
                };
                console.log(data);
            });

            $scope.equipe.nome = us.nome;
            $scope.equipe.email = us.email;
        });

        $scope.enviar = function () {

            console.log($scope.equipe);

            var params = [];
            if ($scope.equipe.pk_equipe !== undefined) {
                params.push("pk_equipe=" + encodeURI($scope.equipe.pk_equipe));
            }

            if ($scope.equipe.nome !== undefined) {

                params.push("nome=" + encodeURI($scope.equipe.nome));
            }
            if ($scope.equipe.email !== undefined) {
                params.push("email=" + encodeURI($scope.equipe.email));
            }
            if ($scope.equipe.matricula !== undefined) {
                params.push("matricula=" + encodeURI($scope.equipe.matricula));
            }
            if ($scope.equipe.senha !== undefined) {
                params.push("senha=" + encodeURI($scope.equipe.senha));
            }
            if ($scope.equipe.matricula !== undefined) {
                params.push("login=" + encodeURI($scope.equipe.matricula));
            }
            // console.log(params);
            equipeFactory.update(params).prototype.$update().then(
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