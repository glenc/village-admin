'use strict';

describe('Filter: grade', function () {

  // load the filter's module
  beforeEach(module('villageAdminApp'));

  // initialize a new instance of the filter before each test
  var grade;
  beforeEach(inject(function ($filter) {
    grade = $filter('grade');
  }));

  it('should return the input prefixed with "grade filter:"', function () {
    var text = 'angularjs';
    expect(grade(text)).toBe('grade filter: ' + text);
  });

});
