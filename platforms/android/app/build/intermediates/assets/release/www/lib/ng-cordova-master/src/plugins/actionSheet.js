angular.module("ngCordova.plugins.actionSheet",[]).factory("$cordovaActionSheet",["$q","$window",function($q,$window){return{show:function(options){var q=$q.defer();return $window.plugins.actionsheet.show(options,function(result){q.resolve(result)}),q.promise},hide:function(){return $window.plugins.actionsheet.hide()}}}]);