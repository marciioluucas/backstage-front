var projetoCreateController = angular.module('projeto.create.controller', []);

projetoCreateController.controller('projetoCreateCtrl',
    ['$scope', 'projetoFactory', '$backstageToast',

    function ($scope, projetoFactory, $backstageToast) {

        var params = '';

        $scope.enviar = function () {
            var projeto = {
                nome: $scope.projeto.nome,
                email: $scope.projeto.email,
                senha: $scope.projeto.senha,
                nivel: $scope.projeto.nivel,
                matricula: $scope.projeto.matricula
            };
            var params = [];
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

            projetoFactory.add(params).save()
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