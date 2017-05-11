var dashboardController = angular.module('dashboard.controller',[]);

dashboardController.controller('dashboardCtrl', ['$scope', function ($scope) {
    $scope.message = "Este aqui é o Dashboard";
}]);