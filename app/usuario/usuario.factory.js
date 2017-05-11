var usuarioFactory = angular.module('usuario.factory', ['ngResource']);

usuarioFactory.factory('usuarioFactory', ['$resource', function ($resource) {



    var _get = function (params) {
        if(params !== null){
            return $resource(apiUrl+ "/usuario/?"+params);
        }
        return $resource(apiUrl+ "/usuario");
    };

    var _add = function () {
        return $resource("https://glacial-brook-80493.herokuapp.com/alunos.json");
    };

    var _update = function (id, values) {
        return $resource("https://glacial-brook-80493.herokuapp.com/alunos/" + id + ".json");
    };
    var _destroy = function (id) {
        return $resource("https://glacial-brook-80493.herokuapp.com/alunos/" + id + ".json");
    };
    return {
        get: _get,
        add: _add,
        update: _update,
        destroy: _destroy
    }
}]);