var propostaCreateController = angular.module('proposta.create.controller', []);

propostaCreateController.controller('propostaCreateCtrl',
    ['$scope', 'propostaFactory', '$backstageToast','$localStorage',

    function ($scope, propostaFactory, $backstageToast,$localStorage) {

        $localStorage.help =
            "Aqui você pode mandar uma ideia para que ela possa ser votada, revisada e talvez vire um software de VERDADE!";


        var params = '';

        $scope.tos = true;

        $scope.enviar = function () {
            var proposta = {
                titulo: $scope.proposta.titulo,
                descricao: $scope.proposta.descricao
            };
            var params = [];
            if ($scope.proposta.titulo !== undefined) {

                params.push("titulo=" + encodeURI($scope.proposta.titulo));
            }
            if ($scope.proposta.descricao !== undefined) {
                params.push("descricao=" + encodeURI($scope.proposta.descricao));
            }
            params.push("fk_usuario=" + encodeURI(1));
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