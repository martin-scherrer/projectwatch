'use strict';

/**
 * @ngdoc function
 * @name projectwatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectwatchApp
 */
angular.module('projectwatchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
