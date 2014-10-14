'use strict';

describe('Controller: GuestlistCtrl', function () {

  // load the controller's module
  beforeEach(module('boda2App'));

  var GuestlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GuestlistCtrl = $controller('GuestlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
