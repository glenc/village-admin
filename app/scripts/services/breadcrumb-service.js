'use strict';

angular.module('villageAdminApp')
  .factory('breadcrumbService', function ($rootScope, $location) {

    var crumbs = [];

    $rootScope.$on('$routeChangeSuccess', function(event, current) {
      var pathElements = $location.path().split('/');
      var result = [];

      var breadcrumbPath = function (index) {
        return '/' + (pathElements.slice(0, index + 1)).join('/');
      };

      pathElements.shift();
      for (var i=0; i<pathElements.length; i++) {
        result.push({label: pathElements[i], path: breadcrumbPath(i)});
      }
      crumbs = result;
    });

    // Public API here
    return {
      getAll: function() {
        return crumbs;
      }
    };
  });
