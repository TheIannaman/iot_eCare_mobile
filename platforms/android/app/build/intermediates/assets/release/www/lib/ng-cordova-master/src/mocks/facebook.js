ngCordovaMocks.factory("$cordovaFacebook",["$q",function($q){return{loginShouldSucceedWith:null,showDialogShouldSucceedWith:null,apiShouldSucceedWith:null,getAccessTokenShouldSucceedWith:null,getLoginStatusShouldSucceedWith:null,logoutShouldSuceedWith:null,login:function(permissions){return null!==this.loginShouldSucceedWith?$q.when(this.loginShouldSucceedWith):$q.reject()},showDialog:function(options){return null!==this.showDialogShouldSucceedWith?$q.when(this.showDialogShouldSucceedWith):$q.reject()},api:function(path,permissions){return null!==this.apiShouldSucceedWith?$q.when(this.apiShouldSucceedWith):$q.reject()},getAccessToken:function(){return null!==this.getAccessTokenShouldSucceedWith?$q.when(this.getAccessTokenShouldSucceedWith):$q.reject()},getLoginStatus:function(){return null!==this.getLoginStatusShouldSucceedWith?$q.when(this.getLoginStatusShouldSucceedWith):$q.reject()},logout:function(){return null!==this.logoutShouldSuceedWith?$q.when(this.logoutShouldSuceedWith):$q.reject()}}}]);