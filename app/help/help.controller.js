'use strict';
angular.module('help.controller', [])
    .controller('helpCtrl', ['$scope', '$localStorage', function ($scope, $localStorage) {
        $scope.message = $localStorage.help;
    }]);