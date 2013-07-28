'use strict';

describe('Service: villageApi', function () {

  // load the service's module
  beforeEach(module('villageAdminApp'));

  // instantiate service
  var villageApi;
  beforeEach(inject(function (_villageApi_) {
    villageApi = _villageApi_;
  }));

  it('should do something', function () {
    expect(!!villageApi).toBe(true);
  });

});
