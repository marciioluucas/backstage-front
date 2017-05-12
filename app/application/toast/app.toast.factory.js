angular.module('app.toast.factory', [])
.factory('$backstageToast', ['$mdToast', function($mdToast) {
    return {
       come: function (icon, text) {
           $mdToast.show({
               hideDelay: 3000,
               template: "" +
               "<md-toast>" +
               "<span class='md-toast-text' flex>" + text + "</span>" +
               "<i class='material-icons'>" + icon + "</i>" +
               "</md-toast>",
               position: 'top right'
           });
        }
    };
}]);
