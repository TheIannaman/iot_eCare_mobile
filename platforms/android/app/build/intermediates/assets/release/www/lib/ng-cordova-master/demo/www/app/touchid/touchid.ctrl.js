angular.module("demo.touchid.ctrl",[]).controller("TouchIDCtrl",["$scope","$cordovaTouchID",function($scope,$cordovaTouchID){var supported=!1;$cordovaTouchID.checkSupport().then(function(val){supported=!0},function(err){supported=!1}),$scope.prompt=function(){supported?$cordovaTouchID.authenticate("Please authenticate").then(function(authVal){alert("Success!")},function(err){alert(err)}):alert("TouchID is not supported on your device.")}}]);