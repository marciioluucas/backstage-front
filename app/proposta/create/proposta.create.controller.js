var propostaCreateController = angular.module('proposta.create.controller', []);

propostaCreateController.controller('propostaCreateCtrl',
    ['$scope', 'propostaFactory', '$backstageToast',

    function ($scope, propostaFactory, $backstageToast) {

        var params = '';

        $scope.enviar = function () {
            var proposta = {
                nome: $scope.proposta.nome,
                email: $scope.proposta.email,
                senha: $scope.proposta.senha,
                nivel: $scope.proposta.nivel,
                matricula: $scope.proposta.matricula
            };
            var params = [];
            if ($scope.proposta.nome !== undefined) {

                params.push("nome=" + encodeURI($scope.proposta.nome));
            }
            if ($scope.proposta.email !== undefined) {
                params.push("email=" + encodeURI($scope.proposta.email));
            }
            if ($scope.proposta.matricula !== undefined) {
                params.push("matricula=" + encodeURI($scope.proposta.matricula));
            }
            if ($scope.proposta.senha !== undefined) {
                params.push("senha=" + encodeURI($scope.proposta.senha));
            }
            if ($scope.proposta.matricula !== undefined) {
                params.push("login=" + encodeURI($scope.proposta.matricula));
            }

            propostaFactory.add(params).save()
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