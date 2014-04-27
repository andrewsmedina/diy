'use strict';

describe('TemplateList', function() {
	beforeEach(module('diyApp'));

	it('should create template model', inject(function($controller) {
		var scope = {},
		    ctrl = $controller('TemplateListCtrl', {$scope: scope});
		expect(scope.templates.length).toBe(1);
	}));
});

describe('SiteNewCtrl', function() {
	beforeEach(module('diyApp'));
});

describe('PreviewCtrl', function() {
	beforeEach(module('diyApp'));
});
