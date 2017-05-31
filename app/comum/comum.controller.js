var comumController = angular.module('comum.controller', []);

comumController.controller('comumCtrl',
    ['$scope', function ($scope) {
        $scope.fixarTop = function(){
            var el = document.getElementsByName('body');
            if(el.scrollTop > 50){
                return true
            }
        }
    }]);