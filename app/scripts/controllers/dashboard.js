'use strict';

angular.module('villageAdminApp')
  .controller('DashboardCtrl', function ($scope, villageApi) {
    villageApi.family.query(function(results) {
      $scope.stats = {
        families: results.length,
        students: _.reduce(results, function(total,f) { return f.students.length + total;}, 0),
        contacts: _.reduce(results, function(total,f) { return f.contacts.length + total;}, 0)
      }
    });
  });
