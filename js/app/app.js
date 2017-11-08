var app = angular.module('sistema',['ui.router']);





app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

        var homeState = {
          name: 'home',
          url: '/home',
          templateUrl: 'paginas/home.html',
          controller: 'controlePrincipal',
          reloadOnSearch: false
        };
        var playlistsState = {
          name: 'playlists',
          url: '/playlists',
          templateUrl: 'paginas/playlists.html',
          controller: 'playlistsctrl',
          reloadOnSearch: false
        };

       	var favoritosState = {
          name: 'favoritos',
          url: '/favoritos',
          templateUrl: 'paginas/favoritos.html',
          controller: 'favoritosctrl',
          reloadOnSearch: false
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
