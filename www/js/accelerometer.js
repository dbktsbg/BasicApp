
var AccelerationSensitivity = 1.0;
var FrequencyInMiliseconds = 1000;
var PreviousAccelerationX = 0;
var PreviousAccelerationY = 0;
var PreviousAccelerationZ = 0;
var watchID = null;


function InitializeAccelerometer() 
{
    startWatch();
}


function startWatch() 
{
    var options = { frequency: FrequencyInMiliseconds };
    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}


function stopWatch() 
{
    if (watchID) 
    {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
}


function onSuccess(acceleration) 
{
    var IsDeviceQuickTilted = false;
    if ( Math.abs(PreviousAccelerationX - acceleration.x) > AccelerationSensitivity) { IsDeviceQuickTilted = true; }
    if ( Math.abs(PreviousAccelerationY - acceleration.y) > AccelerationSensitivity) { IsDeviceQuickTilted = true; }
    if ( Math.abs(PreviousAccelerationZ - acceleration.z) > AccelerationSensitivity) { IsDeviceQuickTilted = true; }

    if (IsDeviceQuickTilted == true) 
    {

        // wake-up screen...
        IsDeviceQuickTilted = false;
        PreviousAccelerationX = acceleration.x
        PreviousAccelerationY = acceleration.y
        PreviousAccelerationZ = acceleration.z

        var element = document.getElementById('accelerometer');

        element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                                        'Acceleration Y: ' + acceleration.y + '<br />' +
                                        'Acceleration Z: ' + acceleration.z + '<br />' +
                                        'Timestamp: ' + acceleration.timestamp + '<br />';

        //navigator.notification.vibrate(1000);
        navigator.notification.beep();

    }
}


function onError() 
{
    element.innerHTML = 'ERROR: ' + watchID + '<br />';
}

