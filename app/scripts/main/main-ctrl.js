'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function ($scope) {
    $scope.greeting = "Hello, Famo.us";

    $scope.clickCenterBox = function(){
      alert('ouch')
    }


  });
