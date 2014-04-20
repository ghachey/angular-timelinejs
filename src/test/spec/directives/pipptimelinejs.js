'use strict';

describe('Directive: pippTimelineJS', function () {

  // load the directive's module
  beforeEach(module('srcApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pipp-timeline-j-s></pipp-timeline-j-s>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pippTimelineJS directive');
  }));
});
