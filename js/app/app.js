var app = angular.module('sistema',['ui.router']);


// Factory que guarda as informações globalmente, nao deixando resetar ao mudar entre rotas.
app.factory('todoListService', function() {
    var artistasCadastrados = [ 
    {nome: "Liam Gallagher", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IxDsRit-p3i4rrALx0gYh2Fr6rSdYeOWkV-xHDW369VeWYBk1g"
    , comentario: "Artista pré-cadastrado para testes", ehFavorito: false, albuns: [], nota:"0", ultimaMusica:""}
    ];

    var albunsCadastrados = [];

    var artistasFavoritados = [];

    var musicasCadastradas = [];

    var playlistsCadastradas = [{nome:"Playlist Teste", musicas:[{nome: "musica1", albumNome:"temalbumn", ano: "2", duracao:"2"}, 
                                                                {nome: "musica2", albumNome:"hihi", ano: "3", duracao:"4"}]}];


  return {
    artistasCadastrados: artistasCadastrados,
    albunsCadastrados: albunsCadastrados,
    artistasFavoritados: artistasFavoritados,
    musicasCadastradas: musicasCadastradas,
    playlistsCadastradas: playlistsCadastradas

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
          controller: 'controlePrincipal',
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
