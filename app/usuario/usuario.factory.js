var usuarioFactory = angular.module('usuario.factory', ['ngResource']);

usuarioFactory.factory('usuarioFactory', ['$resource', function ($resource) {



    var _get = function (params) {
        if(params !== null){
            console.log(apiUrl+ "/usuario/?"+params.join('&'));
            return $resource(apiUrl+ "/usuario/?"+params.join('&'));
        }

        return $resource(apiUrl+ "/usuario");
    };

    var _add = function (params) {
        console.log(apiUrl+ "/usuario/?"+params);
        return $resource(apiUrl+ "/usuario/?"+params);
    };

    var _update = function (params) {
        return $resource(apiUrl+ "/usuario/?"+params);
    };
    var _destroy = function (id) {
        return $resource("https://glacial-brook-80493.herokuapp.com/alunos/" + id + ".json");
    };
    return {
        get: _get,
        add: _add,
        update: _update,
        destroy: _destroy
    };
}]);