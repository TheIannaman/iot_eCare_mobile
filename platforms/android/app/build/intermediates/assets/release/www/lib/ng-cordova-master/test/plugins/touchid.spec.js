describe("Service: $cordovaTouchID",function(){var $cordovaTouchID,$rootScope;beforeEach(module("ngCordova.plugins.touchid")),beforeEach(inject(function(_$cordovaTouchID_,_$q_,_$rootScope_){$cordovaTouchID=_$cordovaTouchID_,$rootScope=_$rootScope_,window.touchid={checkSupport:angular.noop,authenticate:angular.noop}})),it("calls checkSupport without params",function(){var result;spyOn(window.touchid,"checkSupport").and.callFake(function(successCb,errCb){successCb()}),$cordovaTouchID.checkSupport().then(function(){result=!0}),$rootScope.$digest(),expect(result).toBe(!0),expect(window.touchid.checkSupport).toHaveBeenCalledWith(jasmine.any(Function),jasmine.any(Function))}),it("rejects checkSupport on err callback",function(){var errorResult;spyOn(window.touchid,"checkSupport").and.callFake(function(successCb,errCb){errCb("Not available in test")}),$cordovaTouchID.checkSupport().then(angular.noop,function(err){errorResult=!1}),$rootScope.$digest(),expect(errorResult).toBe(!1)}),it("rejects checkSupport when window.cordova is not present",function(){var errorResult;_cordova=window.cordova,window.cordova=null,$cordovaTouchID.checkSupport().then(angular.noop,function(err){errorResult=!1}),$rootScope.$digest(),expect(errorResult).toBe(!1),window.cordova=_cordova}),it("calls authenticate with auth_text_reason",function(){var result;spyOn(window.touchid,"authenticate").and.callFake(function(successCb,errCb,text){successCb()}),$cordovaTouchID.authenticate("To prove the test works").then(function(){result=!0}),$rootScope.$digest(),expect(result).toBe(!0),expect(window.touchid.authenticate).toHaveBeenCalledWith(jasmine.any(Function),jasmine.any(Function),"To prove the test works")}),it("rejects authenticate when window.cordova is not present",function(){var errorResult;_cordova=window.cordova,window.cordova=null,$cordovaTouchID.authenticate().then(angular.noop,function(err){errorResult=!1}),$rootScope.$digest(),expect(errorResult).toBe(!1),window.cordova=_cordova})});