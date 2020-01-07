angular.module("ngCordova.plugins.deviceMotion",[]).factory("$cordovaDeviceMotion",["$q",function($q){return{getCurrentAcceleration:function(){var q=$q.defer();return angular.isUndefined(navigator.accelerometer)||!angular.isFunction(navigator.accelerometer.getCurrentAcceleration)?q.reject("Device do not support watchAcceleration"):navigator.accelerometer.getCurrentAcceleration(function(result){q.resolve(result)},function(err){q.reject(err)}),q.promise},watchAcceleration:function(options){var q=$q.defer();if(angular.isUndefined(navigator.accelerometer)||!angular.isFunction(navigator.accelerometer.watchAcceleration))return q.reject("Device do not support watchAcceleration"),q.promise;var watchID=navigator.accelerometer.watchAcceleration(function(result){q.notify(result)},function(err){q.reject(err)},options);return q.promise.cancel=function(){navigator.accelerometer.clearWatch(watchID)},q.promise.clearWatch=function(id){navigator.accelerometer.clearWatch(id||watchID)},q.promise.watchID=watchID,q.promise},clearWatch:function(watchID){return navigator.accelerometer.clearWatch(watchID)}}}]);