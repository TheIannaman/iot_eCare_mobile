angular.module("ngCordova.plugins.geolocation",[]).factory("$cordovaGeolocation",["$q",function($q){return{getCurrentPosition:function(options){var q=$q.defer();return navigator.geolocation.getCurrentPosition(function(result){q.resolve(result)},function(err){q.reject(err)},options),q.promise},watchPosition:function(options){var q=$q.defer(),watchID=navigator.geolocation.watchPosition(function(result){q.notify(result)},function(err){q.reject(err)},options);return q.promise.cancel=function(){navigator.geolocation.clearWatch(watchID)},q.promise.clearWatch=function(id){navigator.geolocation.clearWatch(id||watchID)},q.promise.watchID=watchID,q.promise},clearWatch:function(watchID){return navigator.geolocation.clearWatch(watchID)}}}]);