'use strict';

angular.module('villageAdminApp')
  .controller('FamilyListCtrl', function ($scope, villageApi) {
    villageApi.family.query(function(results) {
      $scope.families = results;
    });
  });
