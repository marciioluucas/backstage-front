'use strict';
angular.module('layout.module',
    [
        'layout.content.module',
        'layout.toolbar.module',
        'layout.sidenav.module',
        'layout.menu.module',
        'layout.routes',
        'ui.router',
        'layout.controller'
    ]);