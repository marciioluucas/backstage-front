angular.module('comum.sidenav.controller', [])
    .controller('comumSidenavCtrl', function ($scope, $timeout, $mdSidenav, $log, $localStorage) {
        $scope.toggleLeft = fazerAnimacaoOpen('sidenav');
        $scope.usuarioLogado = $localStorage.usuarioLogado;

        $scope.alturaTela = function () {
            if(window.innerWidth > 1280){
                return {height: window.innerHeight - 112 + "px"}
            }
        };

        $scope.close = function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });

        };

        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait) {
            var timer;

            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function () {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }

        function fazerAnimacaoOpen(navID) {
            return debounce(function () {
                $mdSidenav(navID)
                    .toggle()
            }, 200);
        }
    });
