'use strict';

angular.module('villageAdminApp', ['ngResource', 'ui.bootstrap.dialog', 'ui.ace'])
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
      .when('/config', {
        templateUrl: 'views/config.html',
        controller: 'ConfigCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
