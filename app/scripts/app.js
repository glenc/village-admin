'use strict';

angular.module('villageAdminApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/family-list.html',
        controller: 'FamilyListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
