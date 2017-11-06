var app = angular.module('sistema',['ui.router']);

// app.config(function($stateProvider, $urlRouterProvider) {

//     $urlRouterProvider.otherwise('/index');

//         var homeState = {
//           name: 'index',
//           url: '/index',
//           templateUrl: 'index.html',
//           controller: 'controlePrincipal'
//         };
//         var playlistsState = {
//           name: 'playlists',
//           url: '/playlists',
//           templateUrl: 'paginas/playlists.html',
//           controller: 'playlistsctrl'
//         };

//         $stateProvider.state(homeState);
//         $stateProvider.state(playlistsState);


//     });



// app.config(function($routeProvider, $locationProvider)
// {
//    // remove o # da url
//    $locationProvider.html5Mode(true);

//    $routeProvider

//    .when('/', {
//       templateUrl : 'paginas/home.html',
//       controller     : 'controlePrincipal',
//    })

//    .when('/playlists', {
//       templateUrl : 'paginas/playlists.html',
//       controller  : 'playlistsctrl',
//    })

//    .otherwise ({ redirectTo: '/' });
// });
