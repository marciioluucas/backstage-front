var propostaMinhasController = angular.module('proposta.minhas.controller', []);

propostaMinhasController.controller('propostaMinhasCtrl',
    ['$scope', 'propostaFactory', '$backstageDialog', '$localStorage',
        function ($scope, propostaFactory, $backstageDialog, $localStorage) {

            $localStorage.help =
                "Nesta tela voce pode ver as ideias que você submeteu clicando no botão pesquisar ou pode adicionar um filtro " +
                "para que sua busca seja mais precisa!";

            $scope.mostrarTabela = false;
            $scope.editar = function (evento) {
                $backstageDialog.addConteudo('app/proposta/update/ver.html');
                $backstageDialog.addController('propostaUpdateCtrl');
                $backstageDialog.addTitulo('Alteração de proposta');
                $backstageDialog.renderDialog(evento, 'app/proposta/update/ver.html', 'Alteração de proposta')
            };


            $scope.buscar = function () {
                $scope.mostrarProgress = true;
                var params = [];
               params.push("method=listarUsuarioLogado");
                params.push("fk_usuario="+$localStorage.usuarioLogado.id);
                if ($scope.nome !== undefined && $scope.nome !== '') {
                    params.push("titulo=" + $scope.nome);
                }


                    $scope.propostas = propostaFactory.get(params).query(function () {
                    $scope.mostrarTabela = true;
                    $scope.mostrarProgress = false;
                });
            };


        }]);