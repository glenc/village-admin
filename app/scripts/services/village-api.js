'use strict';

angular.module('villageAdminApp')
  .service('villageApi', function villageApi($resource) {
    var apiHost = 'http://localhost\\:8080';
    return {

      // families
      family: $resource(apiHost + '/families/:id', {id:'@_id'}, {
        query: {
          method: 'GET',
          params: { expand:'name,contacts.firstName,contacts.lastName,students' },
          isArray: true
        },
        update: {
          method: 'PUT'
        }
      }),

      // students
      student: $resource(apiHost + '/students/:id', {id:'@_id'}, {
        query: {
          method: 'GET',
          isArray: true
        },
        update: {
          method: 'PUT'
        }
      }),

      // configuration
      config: $resource(apiHost + '/config/:id', {id:'@_id'}, {
        query: {
          method: 'GET',
          isArray: true
        },
        update: {
          method: 'PUT'
        }
      })
    };
  });
