/**
 * Created by juane on 19/05/2017.
 */
var projetoFactory = angular.module('projeto.factory',['ngResource']);

projetoFactory.factory('projetoFactory',[$resource, function ($resource) {

    var _get = function (params) {
        if (params !== null) {
            return $resource(apiUrl + "/projeto/?" + params.join('&'));
        }

        return $resource(apiUrl + "/projeto");
    };

    var _add = function (params) {
        return $resource(apiUrl + "/projeto/?" + params.join('&'));
    };

    var _update = function (params) {
        console.log(apiUrl + "/projeto/?" + params.join('&'));
        return $resource(apiUrl + "/projeto/?" + params.join('&'), {},
            {
                update: {method: 'PUT'}
            });
    };
    var _destroy = function (params) {
        return $resource(apiUrl + "/projeto/?" + params.join('&'));
    };
    return {
        get: _get,
        add: _add,
        update: _update,
        destroy: _destroy
    };

}])