'use strict';

angular.module('villageAdminApp')
  .controller('ConfigCtrl', function ($scope, villageApi) {
    villageApi.config.query(function(results) {
      $scope.settings = results;
      $scope.select(results[0]);
    });

    $scope.aceLoaded = function(editor) {
      editor.getSession().setMode("ace/mode/javascript");
      $scope.editor = editor;
      if ($scope.selection) {
        $scope.select($scope.selection);
      }
    };

    $scope.aceChanged = function(e) {
      console.log(e);
    };

    $scope.select = function(setting) {
      $scope.isNew = false;
      $scope.selection = setting;
      if ($scope.editor) {
        $scope.editor.setValue(JSON.stringify(setting.value, null, '\t'));
      }
    };

    $scope.new = function() {
      $scope.isNew = true;
      $scope.selection = {};
      if ($scope.editor) {
        $scope.editor.setValue(JSON.stringify({}, null, '\t'));
      }
    };

    $scope.saveSetting = function() {
      $scope.selection.value = JSON.parse($scope.editor.getValue());
      if ($scope.isNew === true) {
        villageApi.config.save($scope.selection, function(result) {
          $scope.settings.push(result);
          $scope.select(result);
        });
      } else {
        $scope.selection.$update();
      }
    };

    $scope.deleteSetting = function() {
      $scope.selection.$delete();
    };
  });
