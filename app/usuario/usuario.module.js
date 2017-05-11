var usuarioModule = angular.module('usuario.module',
    [
        "usuario.login.module",
        "usuario.create.module",
        "usuario.retreave.module",
        "usuario.update.module",
        "usuario.delete.module",
        "usuario.controller",
        "usuario.routes",
        'usuario.factory'
    ]
);
