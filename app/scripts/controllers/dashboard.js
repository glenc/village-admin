'use strict';

angular.module('villageAdminApp')
  .controller('DashboardCtrl', function ($scope, $location, villageApi) {

    villageApi.family.query(function(results) {
      $scope.stats = {
        families: results.length,
        students: _.reduce(results, function(total,f) { return f.students.length + total;}, 0),
        contacts: _.reduce(results, function(total,f) { return f.contacts.length + total;}, 0)
      };

      var countPerGrade = _.chain(results)
                           .map(function(f) { return f.students; })
                           .flatten()
                           .groupBy('grade')
                           .map(function(students,grade) {
                             return {
                               grade: grade,
                               students: students.length,
                               genders: _.countBy(students, 'gender')
                             };
                           })
                           .value();

      $scope.classCounts = countPerGrade;
    });

    $scope.newFamily = {
      name: ''
    };
    $scope.createFamily = function() {
      villageApi.family.save({name:$scope.newFamily.name}, function(result) {
        if (result) {
          $location.path("/families/" + result._id);
        }
      })
    }
  });
