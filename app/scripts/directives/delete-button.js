'use strict';

angular.module('villageAdminApp')
  .directive('deleteButton', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        text: '@',
        class: '@',
        action: '&'
      },
      link: function(scope, elem, attrs) {
        elem.bind('click', function(e) {
          e.preventDefault();
          var text = attrs.confirmText || 'Are you sure?';
          if (confirm(text)) {
            scope.action();
          }
        });
      },
      template: '<a href="" class="btn btn-danger {{class}}"><i class="icon-remove"></i> {{text}}</a>'
    };
  });
