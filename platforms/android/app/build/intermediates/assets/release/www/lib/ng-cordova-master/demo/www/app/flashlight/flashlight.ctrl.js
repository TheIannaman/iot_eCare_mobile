angular.module("demo.flashlight.ctrl",[]).controller("FlashlightCtrl",["$scope","$cordovaFlashlight",function($scope,$cordovaFlashlight){$scope.on=function(){$cordovaFlashlight.switchOn()},$scope.off=function(){$cordovaFlashlight.switchOff()}}]);