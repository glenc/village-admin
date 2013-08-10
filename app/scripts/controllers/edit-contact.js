'use strict';

angular.module('villageAdminApp')
  .controller('EditContactCtrl', function ($scope, dialog, item) {
    $scope.title = item ? 'Edit Parent' : 'New Parent';
    $scope.item = item || {};
    $scope.addNumber = function() {
      if (!$scope.item.phoneNumbers) {
        $scope.item.phoneNumbers = [];
      }
      $scope.item.phoneNumbers.push({type:'Home', number:''});
    };
    $scope.submit = function() {
      dialog.close($scope.item);
    };
    $scope.cancel = function() {
      dialog.close('cancel');
    };
    $scope.delete = function() {
      dialog.close('delete');
    };
  });
