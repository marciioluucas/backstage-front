var propostaCurtirController = angular.module('proposta.curtir.controller', []);

propostaCurtirController.controller('propostaCurtirCtrl',
    ['$scope', 'propostaFactory', '$backstageDialog','$backstageToast', '$localStorage',
        function ($scope, propostaFactory, $backstageDialog,$backstageToast, $localStorage) {
            $localStorage.help =
                "Nesta tela voce pode curtir as ideias submetidas clicando no botão redondo com coração," +
                "visualizar completamente a ideia clicando nela e pesquisar as ideias que mais te chamar atenção!";


            $scope.mostrarTabela = false;
            $scope.ver = function (evento) {
                $backstageDialog.addConteudo('app/proposta/update/ver.html');
                $backstageDialog.addController('propostaUpdateCtrl');
                $backstageDialog.addTitulo('Alteração de proposta');
                $backstageDialog.renderDialog(evento, 'app/proposta/update/ver.html', 'Alteração de proposta')
            };

            var params = [];
            $scope.curtir = function(fk_proposta, index) {
                params.push("fk_proposta=" + encodeURI(fk_proposta));
                params.push("fk_usuario=" + encodeURI(1));
                propostaFactory.curtir(params).save()
                    .$promise.then(
                    function (value) {
                        $scope.propostas[index] = propostaFactory.get(["pk_proposta="+fk_proposta]).get();
                        return $backstageToast.come(value.extra.icone,value.message);
                    },

                    function (error) {
                        console.log("ERRO: " + error);
                    }
                );
            };

            $scope.buscar = function () {
                $scope.mostrarProgress = true;
                var params = [];
                if ($scope.titulo !== undefined && $scope.titulo !== '') {
                    params.push("titulo=" + $scope.nome);
                }


                $scope.propostas = propostaFactory.get(params).query(function () {
                    $scope.mostrarTabela = true;
                    $scope.mostrarProgress = false;
                });
            };


        }]);