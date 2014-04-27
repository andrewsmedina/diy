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
	when('/site/new', {
		templateUrl: 'partials/site-new.html',
		controller: 'SiteNewCtrl'
	}).
	when('/site/preview', {
		templateUrl: 'partials/preview.html',
		controller: 'PreviewCtrl'
	}).
	otherwise({
		redirectTo: '/templates'
	});
}]);
