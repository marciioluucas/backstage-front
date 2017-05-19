var equipeCreateController = angular.module('equipe.create.controller', []);

equipeCreateController.controller('equipeCreateCtrl',
    ['$scope', 'equipeFactory', '$backstageToast',

    function ($scope, equipeFactory, $backstageToast) {

        var params = '';

        $scope.enviar = function () {
            var equipe = {
                nome: $scope.equipe.nome,
                email: $scope.equipe.email,
                senha: $scope.equipe.senha,
                nivel: $scope.equipe.nivel,
                matricula: $scope.equipe.matricula
            };
            var params = [];
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

            equipeFactory.add(params).save()
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