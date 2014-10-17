'use strict';

/**
 * @ngdoc service
 * @name boda2App.guests
 * @description
 * # guests
 * Service in the boda2App.
 */
angular.module('boda2App')
  .service('guests', function guests($http) {
   	this.value1 = 'hola';
   	
   	this.getList = function()
   	{
	    return $http({method: 'jsonp', cache:true, url: 'http://boda.miguelpuig.com/index.php?option=com_wedding&task=get_users&tmpl=component&format=raw&callback=JSON_CALLBACK'}).
		  success(function(data) {
			  console.log(data);
		  }).
		  error(function(data) {
		  	console.log(data);
		  });    
   	};
   	
  });
