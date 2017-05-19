var propostaModule = angular.module('proposta.module',
    [
        "proposta.create.module",
        "proposta.retreave.module",
        "proposta.update.module",
        "proposta.delete.module",
        "proposta.controller",
        "proposta.routes",
        'proposta.factory'
    ]
);
