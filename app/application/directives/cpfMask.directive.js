angular.module('cpfMask.directive', [])
    .directive("cpfMask", function () {
        return {
            link: function (scope, element) {
                $(element).mask('000.000.000-00');
            }
        }
    });