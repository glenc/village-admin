'use strict';

angular.module('villageAdminApp')
  .directive('deleteButton', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        text: '@',
        action: '&',
        class: '@'
      },
      template: '<a href="" ng-click="action()" class="btn btn-danger {{class}}"><i class="icon-remove"></i> {{text}}</a>'
    };
  });
