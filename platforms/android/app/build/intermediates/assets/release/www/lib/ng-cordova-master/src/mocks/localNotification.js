ngCordovaMocks.factory("$cordovaLocalNotification",["$q",function($q){var storageKeyPfx="ngCordLocNotif-";function pfxId(id){return storageKeyPfx+id}function getAllIds(){for(var defer=$q.defer(),locNotifIds=[],i=0,len=localStorage.length;i<len;++i)-1<localStorage.key(i).indexOf(storageKeyPfx)&&locNotifIds.push(parseInt(localStorage.key(i).split("-")[1]));return defer.resolve(locNotifIds),defer.promise}return{cancel:function(ids){var defer=$q.defer();return"number"==typeof ids&&(ids=[ids]),ids.forEach(function(id){localStorage.removeItem([pfxId(id)])}),defer.resolve(),defer.promise},cancelAll:function(){var defer=$q.defer();return defer.resolve(),defer.promise},clear:function(ids){"number"==typeof ids&&(ids=[ids]);var defer=$q.defer();return ids.forEach(function(id){localStorage.removeItem([pfxId(id)])}),defer.resolve(),defer.promise},clearAll:function(){return $q.defer().promise},isScheduled:function(id){var defer=$q.defer();return localStorage[pfxId(id)]?defer.resolve(!0):defer.resolve(!1),defer.promise},isPresent:function(id){var defer=$q.defer();return localStorage[pfxId(id)]?defer.resolve(!0):defer.resolve(!1),defer.promise},isTriggered:function(id){var defer=$q.defer();return localStorage[pfxId(id)]?defer.resolve(!1):defer.resolve(!0),defer.promise},getAllIds:function(){return getAllIds()},getIds:function(){return getAllIds()},getScheduledIds:function(){return getAllIds()},getTriggeredIds:function(){var defer=$q.defer();return defer.resolve([]),defer.promise},hasPermission:function(id){var defer=$q.defer();return defer.resolve(!0),defer.promise},schedule:function(data){var defer=$q.defer(),id=pfxId(data.id);return localStorage[id]=JSON.stringify(data),defer.resolve(),defer.promise},update:function(data){var defer=$q.defer(),id=pfxId(data.id);return localStorage[id]=JSON.stringify(data),defer.resolve(),defer.promise}}}]);