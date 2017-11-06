var app = angular.module('sistema',['ngRoute']);

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



app.config(function($routeProvider)
{

   $routeProvider
   .when('/playlists', {
      templateUrl : 'paginas/playlists.html',
      controller  : 'playlistsctrl',
   })

   .otherwise ({ redirectTo: '/' });

});
