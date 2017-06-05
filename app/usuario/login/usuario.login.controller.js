var loginController = angular.module('usuario.login.controller', []);
loginController.controller('usuarioLoginCtrl', ['$scope', '$location',
    'usuarioFactory', '$localStorage', '$state', '$backstageToast',
    function ($scope, $location, usuarioFactory, $localStorage, $state, $backstageToast) {

        $scope.logar = function () {
            var params = [];
            params.push("email=" + $scope.login);
            params.push("senha=" + $scope.senha);

            usuarioFactory.login(params).login().$promise.then(function (value) {
                    if (value.autenticado === true) {
                        if($localStorage.usuarioLogado === undefined) {
                            delete $localStorage.usuarioLogado;
                        }
                        $localStorage.usuarioLogado = {};
                        $localStorage.usuarioLogado.token = value.token;
                        $localStorage.usuarioLogado.id = parseInt(jwt_decode(value.token).data.pk_usuario);
                        $localStorage.usuarioLogado.nome = jwt_decode(value.token).data.nome;
                        $localStorage.usuarioLogado.nivel = parseInt(jwt_decode(value.token).data.nivel);
                        if($localStorage.usuarioLogado.nivel === 1){
                            $state.go('comum.welcome')
                        }
                        if($localStorage.usuarioLogado.nivel > 1) {
                            $state.go('in.dashboard')
                        }
                        console.log($localStorage);
                    } else {

                        $backstageToast.come(value.extra.icone, value.message)
                    }
                },
                function (error) {
                    console.log(error);
                });

        };

        $scope.deslogar = function () {
            delete $localStorage.usuarioLogado;
            $state.go('login');
            console.log($localStorage)
        }
    }]);
