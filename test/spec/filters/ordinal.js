'use strict';

describe('Filter: ordinal', function () {

  // load the filter's module
  beforeEach(module('villageAdminApp'));

  // initialize a new instance of the filter before each test
  var ordinal;
  beforeEach(inject(function ($filter) {
    ordinal = $filter('ordinal');
  }));

  it('converts a number to ordinal', function () {
    expect(ordinal(1)).toBe('1st');
    expect(ordinal(2)).toBe('2nd');
    expect(ordinal(3)).toBe('3rd');
    for (var i=4; i<=12; i++) {
      expect(ordinal(i)).toBe(i + 'th');
    }
  });

});
