'use strict';

angular.module('villageAdminApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/families', {
        templateUrl: 'views/family-list.html',
        controller: 'FamilyListCtrl'
      })
      .when('/families/:id', {
        templateUrl: 'views/family-detail.html',
        controller: 'FamilyDetailCtrl'
      })
      .when('/families/:id/:tab', {
        templateUrl: 'views/family-detail.html',
        controller: 'FamilyDetailCtrl'
      })
      .when('/families/new', {
        templateUrl: 'views/family-detail.html',
        controller: 'FamilyDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
