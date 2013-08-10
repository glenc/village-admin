'use strict';

angular.module('villageAdminApp')
  .directive('addButton', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        text: '@',
        action: '&',
        class: '@'
      },
      template: '<a href="" ng-click="action()" class="btn {{class}}"><i class="icon-plus"></i> {{text}}</a>'
    };
  });
