describe("ngCordovaMocks",function(){beforeEach(function(){module("ngCordovaMocks")}),describe("cordovaActionSheet",function(){var $rootScope=null,$cordovaActionSheet=null,options={};beforeEach(inject(function(_$cordovaActionSheet_,_$rootScope_){$cordovaActionSheet=_$cordovaActionSheet_,$rootScope=_$rootScope_})),it("should be able to show",function(done){$cordovaActionSheet.show(options).then(function(){expect(!0).toBe(!0)},function(){expect(!1).toBe(!0)}).finally(function(){done()}),$rootScope.$digest()}),it("should throws error when trying to show action sheet",function(done){$cordovaActionSheet.throwsError=!0,$cordovaActionSheet.show(options).then(function(){expect(!1).toBe(!0)},function(){expect(!0).toBe(!0)}).finally(function(){done()}),$rootScope.$digest()})})});