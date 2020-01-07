describe("Service: $cordovaNetwork",function(){var $cordovaNetwork;beforeEach(module("ngCordova.plugins.network")),beforeEach(inject(function(_$cordovaNetwork_){$cordovaNetwork=_$cordovaNetwork_,window.Connection={UNKNOWN:"UNKNOWN",NONE:"NONE",CELL_2G:"CELL_2G"},navigator.connection={type:window.Connection.NONE}})),it("should return the network type",function(){expect($cordovaNetwork.getNetwork()).toBe(window.Connection.NONE)}),it("should return isOnline as true when it's not NONE or UNKNOWN",function(){navigator.connection.type=window.Connection.CELL_2G,expect($cordovaNetwork.isOnline()).toBe(!0),navigator.connection.type=window.Connection.UNKNOWN,expect($cordovaNetwork.isOnline()).toBe(!1)}),it("should return ifOffline when it's NONE or UNKNOWN",function(){expect($cordovaNetwork.isOffline()).toBe(!0),navigator.connection.type=window.Connection.UNKNOWN,expect($cordovaNetwork.isOffline()).toBe(!0)})});