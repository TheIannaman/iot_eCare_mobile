angular.module("ngCordova.plugins.healthKit",[]).factory("$cordovaHealthKit",["$q","$window",function($q,$window){return{isAvailable:function(){var q=$q.defer();return $window.plugins.healthkit.available(function(success){q.resolve(success)},function(err){q.reject(err)}),q.promise},checkAuthStatus:function(type){var q=$q.defer();return type=type||"HKQuantityTypeIdentifierHeight",$window.plugins.healthkit.checkAuthStatus({type:type},function(success){q.resolve(success)},function(err){q.reject(err)}),q.promise},requestAuthorization:function(readTypes,writeTypes){var q=$q.defer();return readTypes=readTypes||["HKCharacteristicTypeIdentifierDateOfBirth","HKQuantityTypeIdentifierActiveEnergyBurned","HKQuantityTypeIdentifierHeight"],writeTypes=writeTypes||["HKQuantityTypeIdentifierActiveEnergyBurned","HKQuantityTypeIdentifierHeight","HKQuantityTypeIdentifierDistanceCycling"],$window.plugins.healthkit.requestAuthorization({readTypes:readTypes,writeTypes:writeTypes},function(success){q.resolve(success)},function(err){q.reject(err)}),q.promise},readDateOfBirth:function(){var q=$q.defer();return $window.plugins.healthkit.readDateOfBirth(function(success){q.resolve(success)},function(err){q.resolve(err)}),q.promise},readGender:function(){var q=$q.defer();return $window.plugins.healthkit.readGender(function(success){q.resolve(success)},function(err){q.resolve(err)}),q.promise},saveWeight:function(value,units,date){var q=$q.defer();return $window.plugins.healthkit.saveWeight({unit:units||"lb",amount:value,date:date||new Date},function(success){q.resolve(success)},function(err){q.resolve(err)}),q.promise},readWeight:function(units){var q=$q.defer();return $window.plugins.healthkit.readWeight({unit:units||"lb"},function(success){q.resolve(success)},function(err){q.resolve(err)}),q.promise},saveHeight:function(value,units,date){var q=$q.defer();return $window.plugins.healthkit.saveHeight({unit:units||"in",amount:value,date:date||new Date},function(success){q.resolve(success)},function(err){q.resolve(err)}),q.promise},readHeight:function(units){var q=$q.defer();return $window.plugins.healthkit.readHeight({unit:units||"in"},function(success){q.resolve(success)},function(err){q.resolve(err)}),q.promise},findWorkouts:function(){var q=$q.defer();return $window.plugins.healthkit.findWorkouts({},function(success){q.resolve(success)},function(err){q.resolve(err)}),q.promise},saveWorkout:function(workout){var q=$q.defer();return $window.plugins.healthkit.saveWorkout(workout,function(success){q.resolve(success)},function(err){q.resolve(err)}),q.promise},querySampleType:function(sampleQuery){var q=$q.defer();return $window.plugins.healthkit.querySampleType(sampleQuery,function(success){q.resolve(success)},function(err){q.resolve(err)}),q.promise}}}]);