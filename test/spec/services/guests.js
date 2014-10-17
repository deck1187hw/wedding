'use strict';

describe('Service: guests', function () {

  // load the service's module
  beforeEach(module('boda2App'));

  // instantiate service
  var guests;
  beforeEach(inject(function (_guests_) {
    guests = _guests_;
  }));

  it('should do something', function () {
    expect(!!guests).toBe(true);
  });

});
