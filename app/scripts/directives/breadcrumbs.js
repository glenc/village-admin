'use strict';

angular.module('villageAdminApp')
  .directive('breadcrumbs', function () {
    return {
      restrict: 'E',
      template: '<div class="breadcrumbs">' +
                  '<ul class="breadcrumb">' +
                    '<li>' +
                      '<i class="icon-home home-icon"></i><a href="#/">Home</a>' +
                      '<span class="divider"><i class="icon-angle-right arrow-icon"></i></span>' +
                    '</li>' +
                    '<li class="active">Families</li>' +
                  '</ul>' +
                '</div>'
    };
  });
