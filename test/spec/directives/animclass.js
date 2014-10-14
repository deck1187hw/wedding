'use strict';

describe('Directive: animClass', function () {

  // load the directive's module
  beforeEach(module('boda2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<anim-class></anim-class>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the animClass directive');
  }));
});
