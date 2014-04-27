'use strict';

var diyControllers = angular.module('diyControllers', []);

diyControllers.controller('TemplateListCtrl', ['$scope', function($scope) {
	$scope.templates = [
		{"name": "Pub and Bar"}
	];
}]);

diyControllers.controller('SiteNewCtrl', ['$scope', function($scope) {
}]);

diyControllers.controller('PreviewCtrl', ['$scope', function($scope) {
}]);
