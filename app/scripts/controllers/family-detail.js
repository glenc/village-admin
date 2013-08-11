'use strict';

angular.module('villageAdminApp')
  .controller('FamilyDetailCtrl', function ($scope, $routeParams, villageApi, $location, $dialog) {
    $scope.family = null;
    $scope.location = $routeParams.tab || 'parents';

    villageApi.family.get({id:$routeParams.id}, function(result) {
      $scope.family = result;
    });

    villageApi.student.query({query:'family:' + $routeParams.id}, function(result) {
      $scope.students = result;
    });

    $scope.deleteFamily = function() {
      if ($scope.family) {
        $scope.family.$delete(function() {
          $location.path('/families/');
        });
      }
    };

    $scope.openContactDialog = function(item) {
      var dg = $dialog.dialog({resolve:{item:function() { return angular.copy(item); }}});
      dg.open('views/partials/edit-contact.html', 'EditContactCtrl')
        .then(function(result) {
          if (result && result !== 'cancel') {
            var contacts = $scope.family.contacts;
            if (item) {
              contacts = _.filter(contacts, function(c) { return c._id != item._id; });
            }
            if (result !== 'delete') {
              contacts.push(result);
            }
            $scope.family.contacts = contacts;
            $scope.saveFamily();
          }
        });
    };

    $scope.openStudentDialog = function(item) {
      var dg = $dialog.dialog({resolve:{item:function() { return angular.copy(item); }}});
      dg.open('views/partials/edit-student.html', 'EditStudentCtrl')
        .then(function(result) {
          if (result && result !== 'cancel') {
            var reload = function() {
              villageApi.student.query({query:'family:' + $scope.family._id}, function(result) {
                $scope.students = result;
              });
            };
            if (item && result === 'delete') {
              villageApi.student.delete({id:item._id}, reload);
            } else {
              result.family = $scope.family._id;
              if (item) {
                villageApi.student.update(result, reload);
              } else {
                villageApi.student.save(result, reload);
              }
            }
          }
        });
    };

    $scope.saveFamily = function() {
      $scope.family.$update();
    };
  });
