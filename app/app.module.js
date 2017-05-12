angular.module("backstage",
    [
        "ngMaterial",
        "app.routes",
        "app.modules",
        "app.directives",
        "mdDataTable"
    ]
);
const apiUrl = "http://192.169.0.169/backstage-platform/api";