angular.module("ngCordova.plugins.datePicker",[]).factory("$cordovaDatePicker",["$window","$q",function($window,$q){return{show:function(options){var q=$q.defer();return options=options||{date:new Date,mode:"date"},$window.datePicker.show(options,function(date){q.resolve(date)},function(error){q.reject(error)}),q.promise}}}]);