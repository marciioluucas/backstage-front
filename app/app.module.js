'use strict';
angular.module("backstage",
    [
        "ngMaterial",
        "chart.js",
        "ngStorage",
        "app.routes",
        "app.modules",
        "app.directives"
    ]
);
var apiUrl = "http://192.168.1.15:8080/backstage-platform/api";