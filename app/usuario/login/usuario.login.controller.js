var loginController = angular.module('usuario.login.controller', []);
loginController.controller('usuarioLoginCtrl', ['$scope', '$location', 'usuarioFactory', '$localStorage',
    function ($scope, $location, usuarioFactory, $localStorage) {

        $scope.logar = function () {
            var params = [];
            params.push("email="+$scope.login);
            params.push("senha="+$scope.senha);

            var u = usuarioFactory.login(params).prototype.$login()
                .then(function (value) {

                if (value.autorizado === true) {
                    $localStorage.token = value.token;
                    $localStorage.idUsuarioLogado = value.pk_usuario;
                    $localStorage.nomeUsuarioLogado = value.nome;
                    console.log($localStorage);
                }
                console.log(value);
            });
            // console.log(email + " "+ senha);
            console.log(u);

        };
    }]);
