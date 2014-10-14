'use strict';

/**
 * @ngdoc function
 * @name boda2App.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the boda2App
 */
angular.module('boda2App')
  .controller('BlogCtrl', function ($scope) {
  	$scope.pageClass = 'page-blog';
  
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
