'use strict';
 
var calendarApp = angular.module('calendarApp', [
    'ui.bootstrap',
	'ui.bootstrap.datepicker',
	'ui.bootstrap.timepicker',
	'ui.bootstrap.datetimepicker',
	'ngRoute',
	'ngResource',
	'calendarController',
	'calendarFilters'
]);

calendarApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
	var currentMonth = new Date().getMonth() +1;
	var currentYear = new Date().getFullYear();
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
    $routeProvider.
      when('/month/:year/:month', {
        templateUrl: '/partials/monthView',
        controller: 'monthCtrl'
      }).
     when('/viewTask/:taskId', {
        templateUrl: '/partials/viewTask',
        controller: 'ViewTaskCtrl'
      }).
      otherwise({
        redirectTo: '/month/' + currentYear + '/' + currentMonth
      });
}]);

calendarApp.directive('dayOfMonth', function(){
	return{
		restrict: 'E',
        scope: {
          date: '@'
        },
		templateUrl: '/partials/day-of-month',
        controller: 'dayCtrl'
	}
});

calendarApp.directive('dayTaskList', function(){
	return{
		restrict: 'E',
        scope: {
          task: '='
        },
		templateUrl: '/partials/day-task-list'
	}
});

