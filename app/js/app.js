'use strict';

var diyApp = angular.module('diyApp', [
	'ngRoute',
	'diyControllers'
]);

diyApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/templates', {
		templateUrl: 'partials/template-list.html',
		controller: 'TemplateListCtrl'
	}).
	otherwise({
		redirectTo: '/templates'
	});
}]);
