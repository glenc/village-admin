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
        var popoverOpts = {
          title: attrs.confirmText || 'Are you sure?',
          placement: 'top',
          html: true,
          content: '<button class="btn btn-primary btn-small" data-result="yes"><i class="icon-ok"></i> Yes</button>'+
                   '<button class="btn btn-small" data-result="no"><i class="icon-ban-circle"></i> No</button>'
        };

        var hidePopover = function() {
          elem.popover('hide');
        };

        var handleResult = function(e) {
          var el = $(e.target);
          var result = el.data('result');
          hidePopover();
          if (result === 'yes') {
            scope.action();
          }
        };

        elem.popover(popoverOpts)
            .parent()
            .delegate('button', 'click', handleResult);

        elem.bind('click', function(e) {
          e.preventDefault();
          elem.popover('show');
        });
      },
      template: '<a href="" class="btn btn-danger {{class}}"><i class="icon-remove"></i> {{text}}</a>'
    };
  });
