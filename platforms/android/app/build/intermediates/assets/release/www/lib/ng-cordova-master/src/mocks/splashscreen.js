ngCordovaMocks.factory("$cordovaSplashscreen",function(){return{isVisible:!1,hide:function(){return!(this.isVisible=!1)},show:function(){return this.isVisible=!0}}});