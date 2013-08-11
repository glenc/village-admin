'use strict';

angular.module('villageAdminApp')
  .controller('EditStudentCtrl', function ($scope, dialog, item) {
    $scope.title = item ? 'Edit Student' : 'New Student';
    console.log(item);
    $scope.item = item || {};
    $scope.classes = ['2013', '2014', '2015', '2016', '2018'];
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
