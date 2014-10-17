'use strict';

/**
 * @ngdoc function
 * @name boda2App.controller:LanguageCtrl
 * @description
 * # LanguageCtrl
 * Controller of the boda2App
 */
angular.module('boda2App')
  .controller('LanguageCtrl', function ($scope, $translate) {
    	
    	$scope.languageused = $translate.use();
    	$scope.changeLanguage = function (langKey) {
		  $translate.use(langKey);
		  $scope.languageused = $translate.use();
		};


		
		
  });
