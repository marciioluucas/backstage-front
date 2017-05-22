'use strict';
var dashboard = angular.module('dashboard.factory', ['ngResource']);

dashboard.factory('dashboardFactory', ['$resource', function ($resource) {


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