var propostaFactory = angular.module('proposta.factory', ['ngResource']);

propostaFactory.factory('propostaFactory', ['$resource', function ($resource) {


    var _get = function (params) {
        if (params !== null) {
            return $resource(apiUrl + "/proposta/?" + params.join('&'));
        }

        return $resource(apiUrl + "/proposta");
    };

    var _add = function (params) {
        return $resource(apiUrl + "/proposta/?" + params.join('&'));
    };
    var _curtir = function (params) {
        return $resource(apiUrl + "/voto/?" + params.join('&'));
    };

    var _update = function (params) {
        console.log(apiUrl + "/proposta/?" + params.join('&'));
        return $resource(apiUrl + "/proposta/?" + params.join('&'), {},
            {
                update: {method: 'PUT'}
            });
    };
    var _destroy = function (params) {
        return $resource(apiUrl + "/proposta/?" + params.join('&'));
    };
    return {
        get: _get,
        add: _add,
        update: _update,
        destroy: _destroy,
        curtir: _curtir
    };
}]);