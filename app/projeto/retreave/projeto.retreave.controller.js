/**
 * Created by juane on 19/05/2017.
 */
var projetoRetreaveController = angular.module('projeto.retreave.controller',[]);

projetoRetreaveController.controller('projetoRetreaveCtrl', ['$scope' ,'$projetoFactory', '$backstageDialog', '$state',
    function ($scope, projetoFactory, $backstageDialog, $state) {
        $scope.mostrarTabela = false;
        $scope.editar = function (evento) {
            $backstageDialog.addConteudo('app/retreave/update/alterar.html');
            $backstageDialog.addController('projetoUpdateCtrl');
            $backstageDialog.addTitulo('Alteração de Projeto');
            $backstageDialog.renderDialog(evento, 'app/projeto/update/alterar.html', 'Alteração de Projeto')
};
        $scope.buscar = function () {
            $scope.mostrarProgress = true;
            var params = [];
            if ($scope.titulo !== undefined && $scope.titulo !== '') {
                params.push("titulo=" + $scope.titulo);
            }
            if ($scope.ativado !== undefined && $scope.ativado !== '') {
                params.push("ativado=" + $scope.ativado);
            }
            if ($scope.fk_proposta !== undefined && $scope.fk_proposta !== '') {
                params.push("fk_proposta=" + $scope.fk_proposta);
            }


            $scope.projeto = projetoFactory.get(params).query(function () {
                $scope.mostrarTabela = true;
                $scope.mostrarProgress = false;
            });
        };
}]);