ngCordovaMocks.factory("$cordovaKeychain",["$q",function($q){return{keychains:{},getForKey:function(key,serviceName){var defer=$q.defer();return this.keychains[serviceName]?defer.resolve(this.keychains[serviceName][key]):defer.reject(),defer.promise},setForKey:function(key,serviceName,value){var defer=$q.defer();return this.keychains[serviceName]||(this.keychains[serviceName]={}),this.keychains[serviceName][key]=value,defer.resolve(),defer.promise},removeForKey:function(key,serviceName){var defer=$q.defer();return this.keychains[serviceName]&&delete this.keychains[serviceName][key],defer.resolve(),defer.promise}}}]);