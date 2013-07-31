'use strict';

angular.module('villageAdminApp')
  .controller('FamilyDetailCtrl', function ($scope, $routeParams, villageApi, $location) {
    $scope.family = null;
    $scope.location = $routeParams.tab || 'parents';

    villageApi.family.get({id:$routeParams.id}, function(result) {
      $scope.family = result;
    });

    $scope.deleteFamily = function() {
      if ($scope.family) {
        $scope.family.$delete(function() {
          $location.path('/families/');
        });
      }
    }
  });
