angular.module("listaTelefonica").config(function ($routeProvider,$locationProvider){
    $locationProvider.hashPrefix("");
    $routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl",
        resolve: {
            contatos: function (contatosAPI){
                return contatosAPI.getContatos();
            }
        }
    });
    $routeProvider.when("/novoContato", {
        templateUrl: "view/novoContato.html",
        controller: "novoContatoCtrl"
    });
    $routeProvider.when("/detalhesContato/:id", {
        templateUrl: "view/detalhesContato.html",
        controller: "detalhesContatoCtrl",
        resolve: {
            contato : function(contatosAPI, $route){       
                return contatosAPI.getContato($route.current.params.id);
            }
        }
    })
    $routeProvider.otherwise({redirectTo: "/contatos"});
});