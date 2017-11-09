var app = angular.module('sistema',['ui.router']);


// Factory que guarda as informações globalmente, nao deixando resetar ao mudar entre rotas.
app.factory('todoListService', function() {
    var artistasCadastrados = [ 
    {nome: "Liam Gallagher", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IxDsRit-p3i4rrALx0gYh2Fr6rSdYeOWkV-xHDW369VeWYBk1g"
    , comentario: "William John Paul Gallagher, conhecido como Liam Gallagher, é um músico britânico.", ehFavorito: false, albuns: [], nota:"0", ultimaMusica:""},
    {nome: "Noel Gallagher", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Noel_Gallagher_at_Razzmatazz%2C_Barcelona%2C_Spain-5March2012_%283%29.jpg/200px-Noel_Gallagher_at_Razzmatazz%2C_Barcelona%2C_Spain-5March2012_%283%29.jpg"
    , comentario: "Noel Thomas David Gallagher (Manchester, 29 de Maio de 1967) é um músico britânico.", ehFavorito: false, albuns: [], nota:"0", ultimaMusica:""},
    {nome: "Paul McCartney", imagem: "data:image/jpeg;base64,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"
    , comentario: "Sir James Paul McCartney é um cantor, compositor, multi-instrumentista, empresário, produtor musical britânico. ", ehFavorito: false, albuns: [], nota:"0", ultimaMusica:""}
    ];

    var albunsCadastrados = [];

    var artistasFavoritados = [];

    var musicasCadastradas = [];


  return {
    artistasCadastrados: artistasCadastrados,
    albunsCadastrados: albunsCadastrados,
    artistasFavoritados: artistasFavoritados,
    musicasCadastradas: musicasCadastradas

  };
});





app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

        var homeState = {
          name: 'home',
          url: '/home',
          templateUrl: 'paginas/home.html',
          controller: 'controlePrincipal',
        };
        var playlistsState = {
          name: 'playlists',
          url: '/playlists',
          templateUrl: 'paginas/playlists.html',
          controller: 'playlistsctrl',
        };

       	var favoritosState = {
          name: 'favoritos',
          url: '/favoritos',
          templateUrl: 'paginas/favoritos.html',
          controller: 'controlePrincipal',
        };

        $stateProvider.state(homeState);
        $stateProvider.state(playlistsState);
        $stateProvider.state(favoritosState);


    });






// app.config(function($routeProvider)
// {

//    $routeProvider
//    .when('/playlists', {
//       templateUrl : 'paginas/playlists.html',
//       controller  : 'playlistsctrl',
//    })

//    .otherwise ({ redirectTo: '/' });

// });
