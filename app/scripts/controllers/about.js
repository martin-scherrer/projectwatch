'use strict';

/**
 * @ngdoc function
 * @name projectwatchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projectwatchApp
 */
angular.module('projectwatchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
