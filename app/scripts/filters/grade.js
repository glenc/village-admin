'use strict';

angular.module('villageAdminApp')
  .filter('grade', function () {
    return function(input, grade) {
      if (!grade) { return input; }
      return _.filter(input, function(family) {
        return _.some(family.students, function(s) {
          return s.grade === grade;
        });
      });
    };
  });
