var app = angular.module('sistema',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

        var homeState = {
          name: 'home',
          url: '/home',
          templateUrl: 'paginas/home.html',
          controller: 'controlePrincipal'
        };
        var playlistsState = {
          name: 'playlists',
          url: '/playlists',
          templateUrl: 'paginas/playlists.html',
          controller: 'playlistsctrl'
        };

        $stateProvider.state(homeState);
        $stateProvider.state(playlistsState);


    });



// app.config(function($routeProvider, $locationProvider)
// {
//    // remove o # da url
//    $locationProvider.html5Mode(true);

//    $routeProvider

//    // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
//    .when('/', {
//       templateUrl : 'paginas/home.html',
//       controller     : 'controlePrincipal',
//    })

//    // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
//    .when('/playlists', {
//       templateUrl : 'paginas/playlists.html',
//       controller  : 'playlistsctrl',
//    })

//    // caso não seja nenhum desses, redirecione para a rota '/'
//    .otherwise ({ redirectTo: '/' });
// });
