angular.module('phoneMask.directive', []).directive("phoneMask", function () {
    return {
        link: function (scope, element) {
            var options = {
                onChange: function () {
                    putMask();
                }
            };

            $(element).mask('(00) 00000-0000', options);

            function putMask() {
                var mask;
                var cleanVal = element[0].value.replace(/\D/g, '');
                if (cleanVal.length > 10) {
                    mask = "(00) 00000-0000";
                } else {
                    mask = "(00) 0000-00009";
                }
                $(element).mask(mask, options);
            }
        }
    }
});