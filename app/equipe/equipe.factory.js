var equipeFactory = angular.module('equipe.factory', ['ngResource']);

equipeFactory.factory('equipeFactory', ['$resource', function ($resource) {


    var _get = function (params) {
        if (params !== null) {
            return $resource(apiUrl + "/equipe/?" + params.join('&'));
        }

        return $resource(apiUrl + "/equipe");
    };

    var _add = function (params) {
        return $resource(apiUrl + "/equipe/?" + params.join('&'));
    };

    var _update = function (params) {
        console.log(apiUrl + "/equipe/?" + params.join('&'));
        return $resource(apiUrl + "/equipe/?" + params.join('&'), {},
            {
                update: {method: 'PUT'}
            });
    };
    var _destroy = function (params) {
        return $resource(apiUrl + "/equipe/?" + params.join('&'));
    };
    return {
        get: _get,
        add: _add,
        update: _update,
        destroy: _destroy
    };
}]);