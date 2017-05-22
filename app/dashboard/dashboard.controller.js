'use strict';
var dashboardController = angular.module('dashboard.controller',[]);

dashboardController.controller('dashboardCtrl', ['$scope', function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
}]);