'use strict';

angular.module('villageAdminApp')
  .directive('saveButton', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        text: '@',
        action: '&',
        class: '@'
      },
      template: '<a href="" ng-click="action()" class="btn {{class}}"><i class="icon-ok"></i> {{text}}</a>'
    };
  });
