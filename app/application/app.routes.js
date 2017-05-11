var spartanRoutes = angular.module('app.routes', ['ui.router']);
spartanRoutes.config(function ($stateProvider,$locationProvider) {

    $locationProvider.hashPrefix('');
    var rotas =
        [
            {
                name: 'home',
                url: '/',
                templateUrl: 'app/usuario/login/login.html'
            },
            {
                name: 'criar-conta',
                url: '/criar-conta',
                templateUrl: 'app/usuario/create/criar-conta.html'

            },
            {
                name: 'login',
                url: '/login',
                templateUrl: 'app/usuario/login/login.html'

            },
            {
                name: 'esqueci-a-senha',
                url: '/esqueci-a-senha',
                templateUrl: 'app/usuario/login/esqueci-minha-senha.html'

            }
        ];

    for (i = 0; i < rotas.length; i++) {
        $stateProvider.state(rotas[i]);
    }
});

