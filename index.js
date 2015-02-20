document.addEventListener("deviceready", onDeviceReady, true);


$(window).load(function() { 

})

function onDeviceReady() {


 }

$(document).ready(function(){

});





var logToDom = function (message) {
    var e = document.createElement('label');
    e.innerText = message;

    var br = document.createElement('br');
    var br2 = document.createElement('br');
    document.body.appendChild(e);
    document.body.appendChild(br);
    document.body.appendChild(br2);

    window.scrollTo(0, window.document.height);
};

var delegate = new cordova.plugins.locationManager.Delegate();

delegate.didDetermineStateForRegion = function (pluginResult) {

    logToDom('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

    cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: '
        + JSON.stringify(pluginResult));
};

delegate.didStartMonitoringForRegion = function (pluginResult) {
    console.log('didStartMonitoringForRegion:', pluginResult);

    logToDom('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
};

delegate.didRangeBeaconsInRegion = function (pluginResult) {
    logToDom('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
};


var uuid = 'E2C56DB5-DFFB-48D2-B060-D0F5A71096E0';
var identifier = 'MiniBeacon_00719';
var minor = 0;
var major = 0;
var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

cordova.plugins.locationManager.setDelegate(delegate);

// required in iOS 8+
cordova.plugins.locationManager.requestWhenInUseAuthorization(); 
// or cordova.plugins.locationManager.requestAlwaysAuthorization()

cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
    .fail(console.error)
    .done();