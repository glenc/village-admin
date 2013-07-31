'use strict';

angular.module('villageAdminApp')
  .directive('phoneNumber', function () {
    return {
      restrict: 'E',
      scope: {
        number: "="
      },
      template: '<abbr title="{{number.type}}">{{abbr}}:</abbr> {{number.number}}',
      link: function($scope, elem, attr, ctrl) {
        var abbrs = {
          home: "p",
          work: "p",
          mobile: "c",
          cell: "c",
          fax: "f"
        };
        $scope.abbr = abbrs[$scope.number.type.toLowerCase()];
      }
    };
  });
