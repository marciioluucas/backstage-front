'use strict';
var usuarioFactory = angular.module('usuario.factory', ['ngResource']);

usuarioFactory.factory('usuarioFactory', ['$resource', function ($resource) {


    var _get = function (params) {
        if (params !== null) {
            return $resource(apiUrl + "/usuario/?" + params.join('&'));
        }

        return $resource(apiUrl + "/usuario");
    };

    var _add = function (params) {
        return $resource(apiUrl + "/usuario/?" + params.join('&'));
    };

    var _update = function (params) {
        console.log(apiUrl + "/usuario/?" + params.join('&'));
        return $resource(apiUrl + "/usuario/?" + params.join('&'), {},
            {
                update: {method: 'PUT'}
            });
    };
    var _destroy = function (params) {
        return $resource(apiUrl + "/usuario/?" + params.join('&'));
    };

    var _login = function (params) {
        return $resource(apiUrl + "/usuario/?method=logar" + params.join('&'),
            {},
            {
                login: {

                    method: 'post',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }
            });
    };
    return {
        get: _get,
        add: _add,
        update: _update,
        destroy: _destroy,
        login: _login
    };
}]);