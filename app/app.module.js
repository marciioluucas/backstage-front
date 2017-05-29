'use strict';
angular.module("backstage",
    [
        "ngMaterial",
        "chart.js",
        "app.routes",
        "app.modules",
        "app.directives"
    ]
);
var apiUrl = "http://localhost/backstage-platform/api";