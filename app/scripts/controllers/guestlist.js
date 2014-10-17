'use strict';

/**
 * @ngdoc function
 * @name boda2App.controller:GuestlistCtrl
 * @description
 * # GuestlistCtrl
 * Controller of the boda2App
 */
angular.module('boda2App')
  .controller('GuestlistCtrl', function ($scope,guests) {
  

  	
  	$scope.getList = function() {
       var promise = 
           guests.getList();
       promise.then(
          function(data) { 
			  $scope.listGuests = data.data.data;
          },
          function() {

          });
     };
  	
  	$scope.getList();

  });
