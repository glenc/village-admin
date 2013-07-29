'use strict';

angular.module('villageAdminApp')
  .filter('ordinal', function () {
    return function(input) {
      var s = ['th', 'st', 'nd', 'rd'];
      var v = input % 100;
      return input + (s[(v-20)%10]||s[v]||s[0]);
    };
  });
