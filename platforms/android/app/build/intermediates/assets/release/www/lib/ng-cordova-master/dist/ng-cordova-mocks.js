!function(){var ngCordovaMocks=angular.module("ngCordovaMocks",[]);ngCordovaMocks.factory("$cordovaActionSheet",["$q",function($q){return{throwsError:!1,show:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was an error on showing action sheet"):defer.resolve(),defer.promise}}}]),ngCordovaMocks.factory("$cordovaAppVersion",["$q",function($q){return{throwsError:!1,getAppName:function(){var q=$q.defer();return q.resolve("mock app name"),q.promise},getPackageName:function(){var q=$q.defer();return q.resolve("com.package.mock"),q.promise},getVersionNumber:function(){var q=$q.defer();return q.resolve("1.2.3"),q.promise},getVersionCode:function(){var q=$q.defer();return q.resolve("4.5.6"),q.promise}}}]),ngCordovaMocks.factory("$cordovaBarcodeScanner",["$q",function($q){return{throwsError:!1,scannedText:"",scannedFormat:"",wasCancelled:!1,scan:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was an error scanning."):defer.resolve({text:this.scannedText,format:this.scannedFormat,cancelled:this.wasCancelled}),defer.promise},encode:function(type,data){this.scannedFormat=type,this.scannedText=data;var defer=$q.defer();return this.throwsError?defer.reject("There was an error encoding the data."):defer.resolve(),defer.promise}}}]),ngCordovaMocks.factory("$cordovaBLE",["$q","$timeout","$interval","$log",function($q,$timeout,$interval,$log){var deviceScan={name:"Test Device",id:"AA:BB:CC:DD:EE:FF",advertising:[2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],rssi:-55},deviceConnect={name:"Test Device",id:"AA:BB:CC:DD:EE:FF",advertising:[2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],rssi:-55,services:["1800","1801","180f"],characteristics:[{service:"1800",characteristic:"2a00",properties:["Read"]},{service:"1800",characteristic:"2a01",properties:["Read"]},{service:"1801",characteristic:"2a05",properties:["Read"]},{service:"180f",characteristic:"2a19",properties:["Read"],descriptors:[{uuid:"2901"},{uuid:"2904"}]}]},readData=new ArrayBuffer(8);return{scan:function(services,seconds){var q=$q.defer();return $timeout(function(){q.notify(deviceScan)},Math.round(1e3*seconds*Math.random())),$timeout(function(){q.resolve()},1e3*seconds),q.promise},startScan:function(services,callback,errorCallback){$timeout(function(){callback(deviceScan)},Math.round(1e3*Math.random()))},stopScan:function(){var q=$q.defer();return $timeout(function(){q.resolve()},500),q.promise},connect:function(deviceID){var q=$q.defer();return $timeout(function(){q.resolve(deviceConnect)},1500),q.promise},disconnect:function(deviceID){var q=$q.defer();return $timeout(function(){q.resolve(!0)},500),q.promise},read:function(deviceID,serviceUUID,characteristicUUID){var q=$q.defer();return $timeout(function(){q.resolve(readData)},100),q.promise},write:function(deviceID,serviceUUID,characteristicUUID,data){var q=$q.defer();return $timeout(function(){q.resolve(!0)},100),q.promise},writeWithoutResponse:function(deviceID,serviceUUID,characteristicUUID,data){var q=$q.defer();return $timeout(function(){q.resolve(!0)},100),q.promise},writeCommand:function(deviceID,serviceUUID,characteristicUUID,data){return $log.warning("writeCommand is deprecated, use writeWithoutResponse"),this.writeWithoutResponse(deviceID,serviceUUID,characteristicUUID,data)},startNotification:function(deviceID,serviceUUID,characteristicUUID,callback,errorCallback){$interval(function(){var data=new Uint8Array([Math.round(255*Math.random())]);callback(data)},200,10)},stopNotification:function(deviceID,serviceUUID,characteristicUUID){var q=$q.defer();return $timeout(function(){q.resolve()},100),q.promise},isConnected:function(deviceID){var q=$q.defer();return q.resolve(!0),q.promise},enable:function(){var q=$q.defer();return $timeout(function(){q.resolve()},1500),q.promise},isEnabled:function(){var q=$q.defer();return q.resolve(!0),q.promise}}}]),ngCordovaMocks.factory("$cordovaBrightness",["$q",function($q){var currentBrightness=100;return{get:function(){var q=$q.defer();return q.resolve(currentBrightness),q.promise},set:function(data){var q=$q.defer();return currentBrightness=data,q.resolve("OK"),q.promise},setKeepScreenOn:function(bool){var q=$q.defer();return q.resolve("OK"),q.promise}}}]),ngCordovaMocks.factory("$cordovaCamera",["$q",function($q){return{throwsError:!1,imageData:"",getPicture:function(options){var defer=$q.defer();return this.throwsError?defer.reject("There was an error getting the picture."):(options&&(options=options),defer.resolve(this.imageData)),defer.promise}}}]),ngCordovaMocks.factory("$cordovaCapture",["$q",function($q){return{throwsError:!1,captureAudio:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was an error capturing the audio."):defer.resolve(),defer.promise},captureImage:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was an error capturing the image."):defer.resolve(),defer.promise},captureVideo:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was an error capturing the video."):defer.resolve(),defer.promise}}}]),ngCordovaMocks.factory("$cordovaContacts",["$q",function($q){return{throwsError:!1,contacts:[],save:function(contact){var defer=$q.defer();if(this.throwsError)defer.reject("There was an error saving the contact.");else{for(var existingIndex=null,i=0;i<this.contacts.length;i++)if(this.contacts[i].id===contact.id){existingIndex=i;break}null===existingIndex?(this.contacts.push(contact),defer.resolve()):defer.reject("Contact already exists.")}return defer.promise},remove:function(contact){var defer=$q.defer();if(this.throwsError)defer.reject("There was an error saving the contact.");else{for(var toRemove=null,i=0;i<this.contacts.length;i++)if(this.contacts[i].id===contact.id){toRemove=i;break}null===toRemove?defer.reject("Unable to find contact."):(this.contacts.splice(toRemove,1),defer.resolve())}return defer.promise},find:function(options){var defer=$q.defer();if(this.throwsError)defer.reject("There was an error finding the contact.");else{var fields=options.fields||["id","displayName"];if(delete options.fields,fields)if("*"===fields)defer.resolve(this.contacts);else{for(var i=0;i<this.contacts.length;i++)for(var key in this.contacts[i])this.contacts[i][key];defer.resolve([])}else defer.reject("ContactError.INVALID_ARGUMENT_ERROR")}return defer.promise}}}]),ngCordovaMocks.factory("$cordovaDatePicker",["$q",function($q){return{show:function(options){var q=$q.defer();return options=options||{date:new Date,mode:"date"},q.resolve(options.date),q.promise}}}]),ngCordovaMocks.factory("$cordovaDevice",function(){return{device:"",cordova:"",model:"",platform:"",uuid:"",version:"",version:"",getDevice:function(){return this.device},getCordova:function(){return this.cordova},getModel:function(){return this.model},getPlatform:function(){return this.platform},getUUID:function(){return this.uuid},getVersion:function(){return this.version},getManufacturer:function(){return this.manufacturer}}}),ngCordovaMocks.factory("$cordovaDeviceMotion",["$interval","$q",function($interval,$q){var watchIntervals=[];return{currentAcceleration:null,throwsError:!1,positions:[],watchIntervals:watchIntervals,getCurrentAcceleration:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was an error getting the current acceleration."):defer.resolve(this.currentAcceleration),defer.promise},watchAcceleration:function(options){var defer=$q.defer(),watchId=Math.floor(1e6*Math.random()+1);if(this.positions=[],(self=this).throwsError)defer.reject("There was an error watching the current acceleration.");else{var delay=1e4;options&&options.frequency&&(delay=options.frequency),this.watchIntervals.push($interval(function(){self.throwsError&&defer.reject("There was an error watching the acceleration.");var result={x:Math.floor(100*Math.random()+1),y:Math.floor(100*Math.random()+1),z:Math.floor(100*Math.random()+1),timestamp:Date.now()};self.positions.push(result),defer.notify(result)},delay))}return{watchId:watchId,promise:defer.promise}},clearWatch:function(watchId){var defer=$q.defer();if(watchId)if(this.throwsError)defer.reject("Unable to clear watch.");else{for(var removed=-1,i=0;i<this.watchIntervals.length;i++)if(this.watchIntervals[i].watchId===watchId){$interval.cancel(watchIntervals[i].interval),removed=i;break}-1!==removed&&this.watchIntervals.splice(removed,1)}else defer.reject("Unable to clear watch. No watch ID provided.");return defer.promise}}}]),ngCordovaMocks.factory("$cordovaDeviceOrientation",["$interval","$q",function($interval,$q){var watchIntervals=[];return{currentHeading:null,throwsError:!1,readings:[],watchIntervals:watchIntervals,getCurrentHeading:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was an error getting the current heading."):defer.resolve(this.currentHeading),defer.promise},watchHeading:function(options){var defer=$q.defer(),watchID=Math.floor(1e6*Math.random()+1),self=this;if(self.readings=[],self.throwsError)defer.reject("There was an error getting the compass heading.");else{var delay=100;options&&options.frequency&&(delay=options.frequency),self.watchIntervals.push({watchID:watchID,interval:$interval(function(){self.throwsError&&defer.reject("There was an error watching the acceleration.");var result={magneticHeading:359.99*Math.random()+1,trueHeading:359.99*Math.random()+1,headingAccuracy:Math.floor(360*Math.random()+1),timestamp:Date.now()};self.readings.push(result),defer.notify(result)},delay)})}var cancel=function(id){for(var removed=-1,i=0;i<self.watchIntervals.length;i++)if(self.watchIntervals[i].watchID===id){$interval.cancel(watchIntervals[i].interval),removed=i;break}-1!==removed&&self.watchIntervals.splice(removed,1)};return defer.promise.cancel=function(){cancel(watchID)},defer.promise.clearWatch=function(id){cancel(id||watchID)},defer.promise.watchID=watchID,defer.promise},clearWatch:function(watchId){var defer=$q.defer();if(watchId)if(this.throwsError)defer.reject("Unable to clear watch.");else{for(var removed=-1,i=0;i<this.watchIntervals.length;i++)if(this.watchIntervals[i].watchId===watchId){$interval.cancel(watchIntervals[i].interval),removed=i;break}-1!==removed&&this.watchIntervals.splice(removed,1)}else defer.reject("Unable to clear watch. No watch ID provided.");return defer.promise}}}]),ngCordovaMocks.factory("$cordovaDialogs",["$q",function($q){return{dialogText:!1,dialogTitle:"",defaultValue:"",promptResponse:"",buttonLabels:[],beepCount:0,useHostAbilities:!0,alert:function(message,title,buttonName){var d=$q.defer();return this.useHostAbilities?alert(message):(this.dialogText=message,this.dialogTitle=title,this.buttonLabels.push(buttonName)),d.resolve(),d.promise},confirm:function(message,title,buttonName){var d=$q.defer();if(this.useHostAbilities){var result=confirm(message);d.resolve(result?2:1)}else this.dialogText=message,this.dialogTitle=title,this.buttonLabels.push(buttonName),d.resolve(0);return d.promise},prompt:function(message,title,buttonLabels,defaultText){var d=$q.defer();if(this.useHostAbilities){var result=prompt(message,defaultText);d.resolve(result)}else{this.dialogText=message,this.dialogTitle=title,this.defaultValue=defaultText;for(var i=0;i<buttonLabels.length;i++)this.buttonLabels.push(buttonLabels[i]);d.resolve(this.promptResponse)}return d.promise},beep:function(times){this.beepCount=times}}}]),ngCordovaMocks.factory("$cordovaFacebook",["$q",function($q){return{loginShouldSucceedWith:null,showDialogShouldSucceedWith:null,apiShouldSucceedWith:null,getAccessTokenShouldSucceedWith:null,getLoginStatusShouldSucceedWith:null,logoutShouldSuceedWith:null,login:function(permissions){return null!==this.loginShouldSucceedWith?$q.when(this.loginShouldSucceedWith):$q.reject()},showDialog:function(options){return null!==this.showDialogShouldSucceedWith?$q.when(this.showDialogShouldSucceedWith):$q.reject()},api:function(path,permissions){return null!==this.apiShouldSucceedWith?$q.when(this.apiShouldSucceedWith):$q.reject()},getAccessToken:function(){return null!==this.getAccessTokenShouldSucceedWith?$q.when(this.getAccessTokenShouldSucceedWith):$q.reject()},getLoginStatus:function(){return null!==this.getLoginStatusShouldSucceedWith?$q.when(this.getLoginStatusShouldSucceedWith):$q.reject()},logout:function(){return null!==this.logoutShouldSuceedWith?$q.when(this.logoutShouldSuceedWith):$q.reject()}}}]),ngCordovaMocks.factory("$cordovaFile",["$q",function($q){var files={},mockIt=function(errorMessage){var defer=$q.defer();return this.throwsError?defer.reject(errorMessage):defer.resolve(),defer.promise};return{throwsError:!1,fileSystem:{},shouldMockFiles:!1,files:files,checkDir:function(directory){if(this.shouldMockFiles){var defer=$q.defer();return this.files[directory]&&!this.files[directory].isFile?defer.resolve():defer.reject(),defer.promise}return mockIt.call(this,"There was an error checking the directory.")},createDir:function(directory,overwrite){if(this.shouldMockFiles){var defer=$q.defer();return this.files[directory]={isFile:!1},defer.resolve(),defer.promise}return mockIt.call(this,"There was an error creating the directory.")},listDir:function(filePath){return mockIt.call(this,"There was an error listing the directory")},checkFile:function(filePath){if(this.shouldMockFiles){var defer=$q.defer();return this.files[filePath]&&this.files[filePath].isFile?defer.resolve():defer.reject(),defer.promise}return mockIt.call(this,"There was an error checking for the file.")},createFile:function(filePath,overwrite){if(this.shouldMockFiles){var defer=$q.defer();return this.files[filePath]={isFile:!0,fileContent:""},defer.resolve(),defer.promise}return mockIt.call(this,"There was an error creating the file.")},removeFile:function(directory,file){return mockIt.call(this,"There was an error removng the file.")},writeFile:function(filePath,data,options){return this.shouldMockFiles&&filePath&&data&&(this.files[filePath]={isFile:!0,fileContent:data}),mockIt.call(this,"There was an error writing the file.")},readFile:function(filePath){return this.readAsText(filePath)},readAsText:function(filePath){if(this.shouldMockFiles){var defer=$q.defer();return files[filePath]&&files[filePath].isFile?defer.resolve(files[filePath].fileContent):defer.reject(),defer.promise}return mockIt.call(this,"There was an error reading the file as text.")},readAsDataURL:function(filePath){return mockIt.call(this,"There was an error reading the file as a data url.")},readAsBinaryString:function(filePath){return mockIt.call(this,"There was an error reading the file as a binary string.")},readAsArrayBuffer:function(filePath){return mockIt.call(this,"There was an error reading the file as an array buffer.")},readFileMetadata:function(filePath){return mockIt.call(this,"There was an error reading the file metadata")},readFileAbsolute:function(filePath){return mockIt.call(this,"There was an error reading the file from the absolute path")},readFileMetadataAbsolute:function(filePath){return mockIt.call(this,"There was an error reading the file metadta from the absolute path")}}}]),ngCordovaMocks.factory("$cordovaFileOpener2",["$q",function($q){return{throwsError:!1,open:function(file,type){var defer=$q.defer();return this.throwError?defer.reject({status:0,message:"There was an error capturing the file."}):defer.resolve(),defer.promise},uninstall:function(pack){var defer=$q.defer();return this.throwError?defer.reject({status:0,message:"There was an error capturing the packageId."}):defer.resolve(),defer.promise},appIsInstalled:function(pack){var defer=$q.defer();return this.throwError?defer.reject({status:0,message:"There was an error capturing the packageId."}):defer.resolve(),defer.promise}}}]),ngCordovaMocks.factory("$cordovaFileTransfer",["$q",function($q){var mockIt=function(errorMessage){var defer=$q.defer();return this.throwsError?defer.reject(errorMessage):defer.resolve(),defer.promise};return{throwsError:!1,download:function(source,filePath,options,trust){return mockIt.call(this,"There was an error downloading the file.")},upload:function(server,filePath,options){return mockIt.call(this,"There was an error uploading the file.")}}}]),ngCordovaMocks.factory("$cordovaGeolocation",["$interval","$q",function($interval,$q){var watchIntervals=[];return{throwsError:!1,watchIntervals:watchIntervals,locations:[],currentPosition:null,nextPosition:null,useHostAbilities:!0,getCurrentPosition:function(options){var defer=$q.defer();return this.throwsError?defer.reject("There was an error getting the location."):(options&&(options=options),this.useHostAbilities?navigator.geolocation?navigator.geolocation.getCurrentPosition(function(position){this.currentPosition=position,defer.resolve(this.currentPosition)},function(error){defer.reject(error)}):defer.reject("Geolocation is not supported by this browser."):defer.resolve(this.currentPosition)),defer.promise},watchPosition:function(options){var defer=$q.defer(),watchID=Math.floor(1e6*Math.random()+1),self=this;if(self.locations=[],self.throwsError)defer.reject("There was an error getting the geolocation.");else{var delay=1e3;options&&options.timeout&&(delay=options.timeout),self.watchIntervals.push({watchID:watchID,interval:$interval(function(){self.throwsError&&defer.reject("There was an error watching the geolocation.");var result=self.nextPosition;null===result&&(self.useHostAbilities?navigator.geolocation?navigator.geolocation.getCurrentPosition(function(position){self.currentPosition=position,self.locations.push(position),defer.resolve(position)},function(error){defer.reject(error)}):defer.reject("Geolocation is not supported by this browser."):(result={coords:{latitude:180*Math.random()+1-90,longitude:360*Math.random()+1-180,altitude:100*Math.random()+1,accuracy:10*Math.random()+1,altitudeAccuracy:10*Math.random()+1,heading:360*Math.random()+1,speed:100*Math.random()+1},timestamp:Date.now()},self.currentPosition=result,self.locations.push(result),defer.notify(result)))},delay)})}var cancel=function(id){for(var removed=-1,i=0;i<self.watchIntervals.length;i++)if(self.watchIntervals[i].watchID===id){$interval.cancel(watchIntervals[i].interval),removed=i;break}-1!==removed&&self.watchIntervals.splice(removed,1)};return defer.promise.cancel=function(){cancel(watchID)},defer.promise.clearWatch=function(id){cancel(id||watchID)},defer.promise.watchID=watchID,defer.promise},clearWatch:function(watchID){var defer=$q.defer();if(watchID)if(this.throwsError)defer.reject("Unable to clear watch.");else{for(var removed=-1,i=0;i<this.watchIntervals.length;i++)if(this.watchIntervals[i].watchID===watchID){$interval.cancel(watchIntervals[i].interval),removed=i;break}-1!==removed&&this.watchIntervals.splice(removed,1)}else defer.reject("Unable to clear watch. No watch ID provided.");return defer.promise}}}]),ngCordovaMocks.factory("$cordovaGlobalization",["$q",function($q){var language=navigator.language?navigator.language:"en-US";return{throwsError:!1,preferredLanguage:{value:language},localeName:{value:language},firstDayOfWeek:"Sunday",getPreferredLanguage:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was an error getting the preferred language."):defer.resolve(this.preferredLanguage),defer.promise},getLocaleName:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was an error getting the locale name."):defer.resolve(this.localeName),defer.promise},getFirstDayOfWeek:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was an error getting the first day of week."):defer.resolve(this.firstDayOfWeek),defer.promise},dateToString:function(date,options){var defer=$q.defer();if(this.throwsError)defer.reject("There was an error getting the string from the date.");else{date=date,options=options,defer.resolve("")}return defer.promise},stringToDate:function(dateString,options){var defer=$q.defer();if(this.throwsError)defer.reject("There was an error getting the date from the string.");else{dateString=dateString,options=options,defer.resolve("")}return defer.promise},getDatePattern:function(options){var defer=$q.defer();if(this.throwsError)defer.reject("There was an error getting the date pattern.");else{options=options,defer.resolve("")}return defer.promise},getDateNames:function(options){var defer=$q.defer();if(this.throwsError)defer.reject("There was an error getting the date names.");else{options=options,defer.resolve("")}return defer.promise},isDayLightSavingsTime:function(date){var defer=$q.defer();if(this.throwsError)defer.reject("There was an error getting if this is in daylight savings time mode.");else{date=date,defer.resolve("")}return defer.promise},numberToString:function(number,options){var defer=$q.defer();if(this.throwsError)defer.reject("There was an error convertng the number to a string.");else{number=number,options=options,defer.resolve("")}return defer.promise},stringToNumber:function(numberString,options){var defer=$q.defer();if(this.throwsError)defer.reject("There was an error convertng the string to a number.");else{options=options,defer.resolve("")}return defer.promise},getNumberPattern:function(options){var defer=$q.defer();if(this.throwsError)defer.reject("There was an error convertng the string to a number.");else{options=options,defer.resolve("")}return defer.promise},getCurrencyPattern:function(currencyCode){var defer=$q.defer();if(this.throwsError)defer.reject("There was an error convertng the string to a number.");else{currencyCode=currencyCode,defer.resolve("")}return defer.promise}}}]),ngCordovaMocks.factory("$cordovaGoogleAnalytics",["$q",function($q){var methods={throwsError:!1};return["startTrackerWithId","setUserId","debugMode","trackView","addCustomDimension","trackEvent","trackException","trackTiming","addTransaction","addTransactionItem"].forEach(function(funcName){methods[funcName]=function(){var defer=$q.defer();return this.throwsError?defer.reject():defer.resolve(),defer.promise}}),methods}]),ngCordovaMocks.factory("$cordovaGooglePlayGame",["$q",function($q){return{_throwsError:!1,_isSignedIn:!1,_displayName:"",auth:function(){var defer=$q.defer();return this._throwsError?defer.reject("There was a auth error."):(this.isSignedIn=!0,defer.resolve("SIGN IN SUCCESS")),defer.promise},signout:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was a signout error."):defer.resolve(),defer.promise},isSignedIn:function(){var defer=$q.defer();return this._throwsError?defer.reject("There was a isSignedIn error."):defer.resolve({isSignedIn:this._isSignedIn}),defer.promise},showPlayer:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was a showPlayer error."):defer.resolve({displayName:this._displayName}),defer.promise},submitScore:function(data){var defer=$q.defer();return this._throwsError?defer.reject("There was a submitScore error."):defer.resolve("OK"),defer.promise},showAllLeaderboards:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was a showAllLeaderboards error."):defer.resolve("OK"),defer.promise},showLeaderboard:function(data){var defer=$q.defer();return this._throwsError?defer.reject("There was a showLeaderboard error."):defer.resolve("OK"),defer.promise},unlockAchievement:function(data){var defer=$q.defer();return this.throwsError?defer.reject("There was a unlockAchievement error."):defer.resolve("OK"),defer.promise},incrementAchievement:function(data){var defer=$q.defer();return this._throwsError?defer.reject("There was a incrementAchievement error."):defer.resolve("OK"),defer.promise},showAchievements:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was a showAchievements error."):defer.resolve("OK"),defer.promise}}}]),ngCordovaMocks.factory("$cordovaKeyboard",function(){var isVisible=!1;return{hideAccessoryBar:function(bool){},close:function(){isVisible=!1},show:function(){isVisible=!0},disableScroll:function(bool){},isVisible:function(){return isVisible}}}),ngCordovaMocks.factory("$cordovaKeychain",["$q",function($q){return{keychains:{},getForKey:function(key,serviceName){var defer=$q.defer();return this.keychains[serviceName]?defer.resolve(this.keychains[serviceName][key]):defer.reject(),defer.promise},setForKey:function(key,serviceName,value){var defer=$q.defer();return this.keychains[serviceName]||(this.keychains[serviceName]={}),this.keychains[serviceName][key]=value,defer.resolve(),defer.promise},removeForKey:function(key,serviceName){var defer=$q.defer();return this.keychains[serviceName]&&delete this.keychains[serviceName][key],defer.resolve(),defer.promise}}}]),ngCordovaMocks.factory("$cordovaLocalNotification",["$q",function($q){var storageKeyPfx="ngCordLocNotif-";function pfxId(id){return storageKeyPfx+id}function getAllIds(){for(var defer=$q.defer(),locNotifIds=[],i=0,len=localStorage.length;i<len;++i)-1<localStorage.key(i).indexOf(storageKeyPfx)&&locNotifIds.push(parseInt(localStorage.key(i).split("-")[1]));return defer.resolve(locNotifIds),defer.promise}return{cancel:function(ids){var defer=$q.defer();return"number"==typeof ids&&(ids=[ids]),ids.forEach(function(id){localStorage.removeItem([pfxId(id)])}),defer.resolve(),defer.promise},cancelAll:function(){var defer=$q.defer();return defer.resolve(),defer.promise},clear:function(ids){"number"==typeof ids&&(ids=[ids]);var defer=$q.defer();return ids.forEach(function(id){localStorage.removeItem([pfxId(id)])}),defer.resolve(),defer.promise},clearAll:function(){return $q.defer().promise},isScheduled:function(id){var defer=$q.defer();return localStorage[pfxId(id)]?defer.resolve(!0):defer.resolve(!1),defer.promise},isPresent:function(id){var defer=$q.defer();return localStorage[pfxId(id)]?defer.resolve(!0):defer.resolve(!1),defer.promise},isTriggered:function(id){var defer=$q.defer();return localStorage[pfxId(id)]?defer.resolve(!1):defer.resolve(!0),defer.promise},getAllIds:function(){return getAllIds()},getIds:function(){return getAllIds()},getScheduledIds:function(){return getAllIds()},getTriggeredIds:function(){var defer=$q.defer();return defer.resolve([]),defer.promise},hasPermission:function(id){var defer=$q.defer();return defer.resolve(!0),defer.promise},schedule:function(data){var defer=$q.defer(),id=pfxId(data.id);return localStorage[id]=JSON.stringify(data),defer.resolve(),defer.promise},update:function(data){var defer=$q.defer(),id=pfxId(data.id);return localStorage[id]=JSON.stringify(data),defer.resolve(),defer.promise}}}]),ngCordovaMocks.factory("$cordovaNetwork",["$rootScope",function($rootScope){return{connectionType:"WiFi connection",isConnected:!0,switchToOnline:function(){this.isConnected=!0,$rootScope.$broadcast("$cordovaNetwork:online")},switchToOffline:function(){this.isConnected=!1,$rootScope.$broadcast("$cordovaNetwork:offline")},getNetwork:function(){return this.connectionType},isOnline:function(){return this.isConnected},isOffline:function(){return!this.isConnected}}}]),ngCordovaMocks.factory("$cordovaProgress",["$timeout",function($timeout){return{show:function(_message){},showSimple:function(_dim){},showSimpleWithLabel:function(_dim,_label){},showSimpleWithLabelDetail:function(_dim,_label,_detail){},showDeterminate:function(_dim,_timeout){var timeout=_timeout||5e4;$timeout(function(){},timeout)},showDeterminateWithLabel:function(_dim,_timeout,_label){var timeout=_timeout||5e4;$timeout(function(){},timeout)},showAnnular:function(_dim,_timeout){var timeout=_timeout||5e4;$timeout(function(){},timeout)},showAnnularWithLabel:function(_dim,_timeout,_label){var timeout=_timeout||5e4;$timeout(function(){},timeout)},showBar:function(_dim,_timeout){var timeout=_timeout||5e4;$timeout(function(){},timeout)},showBarWithLabel:function(_dim,_timeout,_label){var timeout=_timeout||5e4;$timeout(function(){},timeout)},showSuccess:function(_dim,_label){},showText:function(_dim,_text,_position){},hide:function(){}}}]),ngCordovaMocks.factory("$cordovaPush",["$q","$timeout","$rootScope",function($q,$timeout,$rootScope){return{throwsError:!1,deviceToken:"",onNotification:function(notification){$timeout(function(){$rootScope.$broadcast("$cordovaPush:notificationReceived",notification)})},register:function(config){var defer=$q.defer();return void 0!==config&&void 0===config.ecb&&(config.ecb=this.onNotification),this.throwsError?defer.reject("There was a register error."):(defer.resolve(this.deviceToken),config&&config.ecb&&config.ecb({event:"registered",regid:this.deviceToken})),defer.promise},unregister:function(options){var defer=$q.defer();return this.throwsError?defer.reject("There was a register error."):defer.resolve(),defer.promise}}}]),ngCordovaMocks.factory("$cordovaScreenshot",["$q",function($q){return{throwsError:!1,captureToFile:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was an error capturing the screenshot."):defer.resolve("path"),defer.promise},captureToUri:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was an error capturing the screenshot."):defer.resolve(),defer.promise}}}]),ngCordovaMocks.factory("$cordovaSocialSharing",["$q",function($q){return{throwsError:!1,message:"",image:"",link:"",number:"",subject:"",toAddresses:[],bccAddresses:[],socialService:"",attachments:[],shareViaTwitter:function(message,image,link){var defer=$q.defer();return this.throwsError?defer.reject("There was an error sharing via Twitter."):(this.message=message,this.image=image,this.link=link,defer.resolve()),defer.promise},shareViaWhatsApp:function(message,image,link){var defer=$q.defer();return this.throwsError?defer.reject("There was an error sharing via WhatsApp."):(this.message=message,this.image=image,this.link=link,defer.resolve()),defer.promise},shareViaFacebook:function(message,image,link){var defer=$q.defer();return this.throwsError?defer.reject("There was an error sharing via Facebook."):(this.message=message,this.image=image,this.link=link,defer.resolve()),defer.promise},shareViaSMS:function(message,number){var defer=$q.defer();return this.throwsError?defer.reject("There was an error sharing via SMS."):(this.message=message,this.number=number,defer.resolve()),defer.promise},shareViaEmail:function(message,subject,toArr,bccArr,file){var defer=$q.defer();return this.throwsError?defer.reject("There was an error sharing via SMS."):(this.message=message,this.subject=subject,this.toAddresses=toArr,this.bccAddressesc=bccArr,this.attachments=file,defer.resolve()),defer.promise},canShareViaEmail:function(){var defer=$q.defer();return this.throwsError?defer.reject(!1):defer.resolve(!0),defer.promise},canShareVia:function(via,message,subject,file,link){var defer=$q.defer();return this.throwsError?defer.reject("There was an error sharing via SMS."):(this.message=message,this.socialService=via,this.subject=subject,this.attachments=file,this.link=link,defer.resolve()),defer.promise},shareVia:function(via,message,subject,file,link){var defer=$q.defer();return this.throwsError?defer.reject("There was an error sharing via SMS."):(this.socialService=via,this.message=message,this.subject=subject,this.attachments=file,this.link=link,defer.resolve()),defer.promise},share:function(message,subject,file,link){var defer=$q.defer();return this.throwsError?defer.reject("There was an error sharing via SMS."):(this.message=message,this.subject=subject,this.attachments=file,this.link=link,defer.resolve()),defer.promise},shareWithOptions:function(options){var defer=$q.defer();return this.throwsError?defer.reject("There was an error sharing via SMS."):(this.message=options.message,this.subject=options.subject,this.attachments=options.files,this.link=options.url,defer.resolve()),defer.promise}}}]),ngCordovaMocks.factory("$cordovaSplashscreen",function(){return{isVisible:!1,hide:function(){return!(this.isVisible=!1)},show:function(){return this.isVisible=!0}}}),ngCordovaMocks.factory("$cordovaSQLite",["$q",function($q){return{openDBShouldSucceedWith:null,executeShouldSucceedWith:null,insertCollectionShouldSucceedWith:null,nestedExecuteShouldSucceedWith:null,deleteDBShouldSucceedWith:null,openDB:function(options,background){null!==this.openDBShouldSucceedWith?$q.when(this.openDBShouldSucceedWith):$q.reject()},execute:function(db,query,binding){null!==this.executeShouldSucceedWith?$q.when(this.executeShouldSucceedWith):$q.reject()},insertCollection:function(db,query,bindings){null!==this.insertCollectionShouldSucceedWith?$q.when(this.insertCollectionShouldSucceedWith):$q.reject()},nestedExecute:function(db,query1,query2,binding1,binding2){null!==this.nestedExecuteShouldSucceedWith?$q.when(this.nestedExecuteShouldSucceedWith):$q.reject()},deleteDB:function(dbName){null!==this.deleteDBShouldSucceedWith?$q.when(this.deleteDBShouldSucceedWith):$q.reject()}}}]),ngCordovaMocks.factory("$cordovaStatusbar",function(){return{isStatusBarVisible:!0,canOverlayWebView:!0,overlaysWebView:function(bool){this.canOverlayWebView=bool},style:function(style){return style},styleHex:function(colorHex){return colorHex},styleColor:function(color){return color},hide:function(){this.isStatusBarVisible=!1},show:function(){this.isStatusBarVisible=!0},isVisible:function(){return this.isStatusBarVisible}}}),ngCordovaMocks.factory("$cordovaToast",["$q",function($q){return{throwsError:!1,showShortTop:function(message){var defer=$q.defer();return this.throwsError?defer.reject("There was an error showing the toast."):defer.resolve(),defer.promise},showShortCenter:function(message){var defer=$q.defer();return this.throwsError?defer.reject("There was an error showing the toast."):defer.resolve(),defer.promise},showShortBottom:function(message){var defer=$q.defer();return this.throwsError?defer.reject("There was an error showing the toast."):defer.resolve(),defer.promise},showLongTop:function(message){var defer=$q.defer();return this.throwsError?defer.reject("There was an error showing the toast."):defer.resolve(),defer.promise},showLongCenter:function(message){var defer=$q.defer();return this.throwsError?defer.reject("There was an error showing the toast."):defer.resolve(),defer.promise},showLongBottom:function(message){var defer=$q.defer();return this.throwsError?defer.reject("There was an error showing the toast."):defer.resolve(),defer.promise},showWithOptions:function(options){var defer=$q.defer();return this.throwsError?defer.reject("There was an error showing the toast."):defer.resolve(),defer.promise},show:function(message,duration,position){var defer=$q.defer();return this.throwsError?defer.reject("There was an error showing the toast."):defer.resolve(),defer.promise},hide:function(){var defer=$q.defer();return this.throwsError?defer.reject("There was an error hiding the toast."):defer.resolve(),defer.promise}}}]),ngCordovaMocks.factory("$cordovaVibration",["$timeout",function($timeout){return{vibrateTimer:null,isVibrating:!1,vibrate:function(time){0<time&&(this.isVibrating=!0,self=this,time instanceof Array?this.vibrateTimer=$timeout(function(){self.isVibrating=!1,self.vibrateTimer=null},time[0]):this.vibrateTimer=$timeout(function(){self.isVibrating=!1,self.vibrateTimer=null},time))},vibrateWithPattern:function(pattern,repeat){},cancelVibration:function(){null!==this.vibrateTimer&&!0===this.isVibrating&&($timeout.cancel(this.vibrateTimer),this.isVibrating=!1)}}}])}();