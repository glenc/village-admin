'use strict';

angular.module('villageAdminApp')
  .controller('ConfigCtrl', function ($scope, villageApi) {
    villageApi.config.query(function(results) {
      $scope.settings = results;
    });
  });
