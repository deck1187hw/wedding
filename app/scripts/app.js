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
    'pascalprecht.translate',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function($translateProvider){
      
      $translateProvider.translations('en-US', {
	    HOME: 'Home',
	    BLOG: 'Blog',
	    GUEST_LIST: 'Guest List',
	    BUTTON_TEXT_EN: 'english',
		BUTTON_TEXT_ES: 'spanish'
	  })
	  .translations('es-ES', {
	    HOME: 'Inicio',
	    BLOG: 'Blog',
	    GUEST_LIST: 'Lista de invitados',
	    BUTTON_TEXT_EN: 'inglés',
		BUTTON_TEXT_ES: 'español'
	  });
	  

		$translateProvider.determinePreferredLanguage(function () {
				  
		   var userLang = navigator.language || navigator.userLanguage; 
		   return userLang;

		});
		

  })  
  .run(['$rootScope', '$location', function ($rootScope, $location) {
	  
	  $rootScope.guestImages = 'http://boda.miguelpuig.com/';
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


