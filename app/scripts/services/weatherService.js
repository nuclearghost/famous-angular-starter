'use strict';

angular.module('famousAngularStarter')
.factory('WeatherService', ['$http', function($http) {

  return {
    getWeather: function(latitude, longitude, callback) {
      var url = '//api.forecast.io/forecast/dc70f3dcbe223a0b86130f19b7c03de0/' + latitude + ',' + longitude;
      $http({method: 'GET', url: url})
        .success(function(data, status, headers, config) {
          callback(data);
        })
        .error(function(data, status, headers, config) {
          callback(null);
        });
    }
  };

}]); 