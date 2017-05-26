'use strict';
var welcome = angular.module('welcome.factory', ['ngResource']);

welcome.factory('welcomeFactory', ['$resource', function ($resource) {


    var _getUsersAtivos = function () {
            return $resource(apiUrl + "/usuario/?method=retreaveGraphUsuarioAtivo");
    };

    var _getUsersInativos = function () {
        return $resource(apiUrl + "/usuario/?method=retreaveGraphUsuarioInativo");
    };

    return {
        getUsersAtivos: _getUsersAtivos(),
        getUsersInativos: _getUsersInativos()

    };
}]);