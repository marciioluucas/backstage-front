var loginController = angular.module('usuario.login.controller', []);
loginController.controller('usuarioLoginCtrl', ['$scope', '$location', 'usuarioFactory', '$localStorage',
    function ($scope, $location, usuarioFactory, $localStorage) {

        var bate = false;
        $scope.logar = function () {
          var u = usuarioFactory.login().login($scope.email, $scope.senha);
          console.log(u);
            if(u.autorizado === true) {
              $localStorage.token = u.token;
              $localStorage.idUsuarioLogado = u.pk_usuario;
              $localStorage.nomeUsuarioLogado = u.nome;
              console.log($localStorage);
            }
        };
    }]);
