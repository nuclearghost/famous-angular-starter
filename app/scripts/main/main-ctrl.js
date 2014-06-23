'use strict';

angular.module('famousAngularStarter')
.controller('MainCtrl', ['$scope', '$famous', 'MapsService', 'WeatherService', 
  function ($scope, $famous, MapsService, WeatherService) {

    //var Transitionable = $famous['famous/transitions/Transitionable'];
    //var Timer = $famous['famous/utilities/Timer'];

    $scope.input = {
      name: 'San Francisco'
    };

    $scope.cities = [];

    $scope.addCity = function() {
      $scope.cities.push($scope.input.name);
      MapsService.geocode($scope.input.name, $scope.handleGeocode);
      $scope.input.name = '';
    };

    $scope.handleGeocode = function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results.length > 1){
          alert('ambiguous results');
        }
        var loc = results[0].geometry.location;
        console.log(results[0].geometry.location);
        WeatherService.getWeather(loc.k, loc.A, function(data){
          console.log(data);
        })
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    };

  }]);
