describe("ngCordovaMocks",function(){beforeEach(function(){module("ngCordovaMocks")}),describe("cordovaGlobalization",function(){var $rootScope=null,$cordovaGlobalization=null;beforeEach(inject(function(_$cordovaGlobalization_,_$rootScope_){$cordovaGlobalization=_$cordovaGlobalization_,$rootScope=_$rootScope_})),it("should get the preferred language",function(done){$cordovaGlobalization.getPreferredLanguage().then(function(actual){expect(typeof actual).toBe("object"),expect(actual.value).toBeDefined(),expect(typeof actual.value).toBe("string"),expect(0<actual.value.length).toBe(!0)},function(){expect(!1).toBe(!0)}).finally(function(){done()}),$rootScope.$digest()}),it("should throw an error while getting the preferred language.",function(done){$cordovaGlobalization.throwsError=!0,$cordovaGlobalization.getPreferredLanguage().then(function(actual){expect(!1).toBe(!0)},function(){expect(!0).toBe(!0)}).finally(function(){done()}),$rootScope.$digest()}),it("should get the locale",function(done){$cordovaGlobalization.getLocaleName().then(function(actual){expect(actual).toBeDefined(),expect(typeof actual).toBe("object"),expect(actual.value).toBeDefined(),expect(typeof actual.value).toBe("string"),expect(0<actual.value.length).toBe(!0)},function(){expect(!1).toBe(!0)}).finally(function(){done()}),$rootScope.$digest()}),it("should throw an error while getting the locale.",function(done){$cordovaGlobalization.throwsError=!0,$cordovaGlobalization.getLocaleName().then(function(actual){expect(!1).toBe(!0)},function(){expect(!0).toBe(!0)}).finally(function(){done()}),$rootScope.$digest()})})});