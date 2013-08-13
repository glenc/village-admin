'use strict';

angular.module('villageAdminApp')
  .controller('EditStudentCtrl', function ($scope, villageApi, dialog, item) {
    $scope.title = item ? 'Edit Student' : 'New Student';
    $scope.item = item || {};
    $scope.classes = [ 'Please Wait...' ];

    villageApi.config.query({query:'key:school-calendar'}, function(results) {
      $scope.classes = Object.keys(results[0].value.classes);
    });

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
