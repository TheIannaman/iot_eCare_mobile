angular.module("demo.batteryStatus.ctrl",[]).controller("BatteryStatusCtrl",["$scope","$timeout","$cordovaBatteryStatus",function($scope,$timeout,$cordovaBatteryStatus){document.addEventListener("deviceready",function(){$scope.watch=function(){$cordovaBatteryStatus.$on("batterystatus",function(result,info){$timeout(function(){$scope.batteryLevel=info.level,$scope.isPluggedIn=info.isPlugged}),alert("Info "+info.level+" "+info.isPlugged)})}},!1)}]);