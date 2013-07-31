'use strict';

angular.module('villageAdminApp')
  .controller('FamilyListCtrl', function ($scope, villageApi) {
    $scope.nameFilter = '';
    $scope.gradeFilter = '';

    villageApi.family.query(function(results) {
      $scope.families = results;
    });

    $scope.applyGradeFilter = function(grade) {
      $scope.gradeFilter = grade;
    };
  });
