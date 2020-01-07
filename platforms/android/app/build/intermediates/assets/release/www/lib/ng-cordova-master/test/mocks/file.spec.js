describe("ngCordovaMocks",function(){beforeEach(function(){module("ngCordovaMocks")}),describe("cordovaFile",function(){var $cordovaFile=null,$rootScope=null;beforeEach(inject(function(_$cordovaFile_,_$rootScope_){$cordovaFile=_$cordovaFile_,$rootScope=_$rootScope_})),it("should successfully check directory",function(done){$cordovaFile.checkDir("/some/directory").then(function(){expect(!0).toBe(!0)},function(){expect(!1).toBe(!0)}).finally(done),$rootScope.$digest()}),it("should fail checking directory",function(done){$cordovaFile.throwsError=!0,$cordovaFile.checkDir("/some/directory").then(function(){expect(!0).toBe(!1)},function(){expect(!0).toBe(!0)}).finally(done),$rootScope.$digest()}),it("should successfully create a directory",function(done){$cordovaFile.createDir("/some/directory",!0).then(function(){expect(!0).toBe(!0)},function(){expect(!1).toBe(!0)}).finally(done),$rootScope.$digest()}),it("should fail creating a directory",function(done){$cordovaFile.throwsError=!0,$cordovaFile.createDir("/some/directory",!0).then(function(){expect(!0).toBe(!1)},function(){expect(!0).toBe(!0)}).finally(done),$rootScope.$digest()}),it("should successfully check for a file",function(done){$cordovaFile.checkFile("/some/directory","test.txt").then(function(){expect(!0).toBe(!0)},function(){expect(!1).toBe(!0)}).finally(done),$rootScope.$digest()}),it("should fail checking directory",function(done){$cordovaFile.throwsError=!0,$cordovaFile.checkDir("/some/directory").then(function(){expect(!0).toBe(!1)},function(){expect(!0).toBe(!0)}).finally(done),$rootScope.$digest()}),describe("tests with mockfFiles flag enabled",function(){beforeEach(function(){$cordovaFile.shouldMockFiles=!0}),describe("file tests",function(){beforeEach(function(){$cordovaFile.writeFile("test.txt","My data object"),$rootScope.$digest()}),it("should resolve if file exists",function(done){$cordovaFile.checkFile("test.txt").then(function(){expect(!0).toEqual(!0)},function(){expect(!1).toEqual(!0)}).finally(done),$rootScope.$digest()}),it("should reject if file do not exists",function(done){$cordovaFile.checkFile("nonExistingFile.txt").then(function(){expect(!1).toEqual(!0)},function(){expect(!0).toEqual(!0)}).finally(done),$rootScope.$digest()}),it("should return file content if file exists",function(done){$cordovaFile.readFile("test.txt").then(function(data){expect("My data object").toEqual(data)},function(){expect(!1).toEqual(!0)}).finally(done),$rootScope.$digest()}),it("shold be rejected if file does not exists",function(done){$cordovaFile.readFile("NotValidFile").then(function(data){expect(!1).toEqual(!0)},function(){expect(!0).toEqual(!0)}).finally(done),$rootScope.$digest()})}),describe("directory tests",function(){beforeEach(function(){$cordovaFile.createDir("testfolder",!0),$rootScope.$digest()}),it("should resolve test directory which was created in setup",function(done){$cordovaFile.checkDir("testfolder").then(function(){expect(!0).toEqual(!0)},function(){expect(!1).toEqual(!0)}).finally(done),$rootScope.$digest()}),it("should not return test directory as file",function(done){$cordovaFile.readFile("testfolder").then(function(){expect(!1).toEqual(!0)},function(){expect(!0).toEqual(!0)}).finally(done),$rootScope.$digest()})})})})});