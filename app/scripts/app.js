'use strict';

/**
 * @ngdoc overview
 * @name boda2App
 * @description
 * # boda2App
 *
 * Main module of the application.
 */
angular
  .module('boda2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
    .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .run(['$rootScope', '$location', function ($rootScope, $location) {

	  	$rootScope.getClass = function(path) {
		    if ($location.path().substr(0, path.length) === path) {
		      return 'active';
		    } else {
		      return '';
		    }
		};

  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/guestlist', {
        templateUrl: 'views/guestlist.html',
        controller: 'GuestlistCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


