'use strict';

angular.module('famousAngularStarter')
.factory('MapsService', function(){

  var geocoder = new google.maps.Geocoder();

  return {
    geocode: function(city, callback) {
      geocoder.geocode({ 'address': city }, callback);
    }
  }

}); 
