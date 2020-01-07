angular.module("ngCordova.plugins.batteryStatus",[]).factory("$cordovaBatteryStatus",["$rootScope","$window","$timeout",function($rootScope,$window,$timeout){var batteryStatus=function(status){$timeout(function(){$rootScope.$broadcast("$cordovaBatteryStatus:status",status)})},batteryCritical=function(status){$timeout(function(){$rootScope.$broadcast("$cordovaBatteryStatus:critical",status)})},batteryLow=function(status){$timeout(function(){$rootScope.$broadcast("$cordovaBatteryStatus:low",status)})};return document.addEventListener("deviceready",function(){navigator.battery&&($window.addEventListener("batterystatus",batteryStatus,!1),$window.addEventListener("batterycritical",batteryCritical,!1),$window.addEventListener("batterylow",batteryLow,!1))},!1),!0}]).run(["$injector",function($injector){$injector.get("$cordovaBatteryStatus")}]);