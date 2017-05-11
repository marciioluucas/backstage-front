var uls = angular.module('usuario.login.service',[]);
uls.service('usuarioLoginService', function () {
    var item = {};

    return {
        getItem: function () {
            return item;
        },
        setItem: function(value) {
            item = value;
        }
    }
});
