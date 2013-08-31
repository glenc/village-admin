'use strict';

angular.module('villageAdminApp')
  .directive('breadcrumbs', function (breadcrumbService) {
    return {
      restrict: 'E',
      scope: {},
      link: function(scope) {
        scope.breadcrumbService = breadcrumbService;
      },
      template: '<div class="breadcrumbs">' +
                  '<ul class="breadcrumb">' +
                    '<li>' +
                      '<i class="icon-home home-icon"></i><a href="#/">Home</a>' +
                    '</li>' +
                    '<li ng-repeat="crumb in breadcrumbService.getAll()">' +
                      '<span class="divider"><i class="icon-angle-right arrow-icon"></i></span>' +
                      '<ng-switch on="$last">' +
                        '<span ng-switch-when="true">{{crumb.label}}</span>' +
                        '<span ng-switch-default><a href="#{{crumb.path}}">{{crumb.label}}</a></span>' +
                      '</ng-switch>' +
                    '</li>' +
                  '</ul>' +
                '</div>'
    };
  });
