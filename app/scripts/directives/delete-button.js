'use strict';

angular.module('villageAdminApp')
  .directive('deleteButton', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        text: '@',
        confirmText: '@',
        class: '@',
        action: '&'
      },
      controller: function($scope, $element) {
        var popoverOpts = {
          title: $scope.confirmText || 'Are you sure?',
          placement: 'top',
          html: true,
          content: '<button class="btn btn-primary btn-small" data-result="yes"><i class="icon-ok"></i> Yes</button>'+
                   '<button class="btn btn-small" data-result="no"><i class="icon-ban-circle"></i> No</button>'
        };

        $element.popover(popoverOpts)
          .parent()
          .delegate('button', 'click', function(e) {
            var el = $(e.currentTarget);
            var result = el.data('result');
            $element.popover('hide');
            if (result === 'yes') {
              $scope.$apply($scope.action);
            }
          });
      },
      template: '<a href="" class="btn btn-danger {{class}}"><i class="icon-remove"></i> {{text}}</a>'
    };
  });
