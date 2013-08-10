'use strict';

angular.module('villageAdminApp')
  .directive('cancelButton', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        text: '@',
        action: '&',
        class: '@'
      },
      template: '<a href="" ng-click="action()" class="btn {{class}}"><i class="icon-ban-circle"></i> {{text}}</a>'
    };
  });
