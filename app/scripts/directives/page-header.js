'use strict';

angular.module('villageAdminApp')
  .directive('pageHeader', function () {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        subtitle: '@'
      },
      template: '<div class="page-header position-relative">' +
                  '<h1>{{title}}' +
                  '<small ng-show="subtitle"><i class="icon-double-angle-right"></i> {{subtitle}}</small>' +
                  '</h1>' +
                '</div>'
    };
  });
