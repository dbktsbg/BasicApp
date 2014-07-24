// ---------------------
// Common
// ---------------------

var pictureSource;   // picture source
var destinationType; // sets the format of returned value 


function InitializeCamera() 
{
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

function onCameraFail(message) 
{
    alert('Failed because: ' + message);
}

// ---------------------
// TakePicture
// ---------------------

function TakePicture() 
{
    navigator.camera.getPicture
        (
        onPhotoDataSuccess,
        onCameraFail,
        { quality: 50, destinationType: destinationType.FILE_URI }
        ); 
}

function onPhotoDataSuccess(imageData) 
{
    alert("onPhotoDataSuccess");
    // Get image handle
    var smallImage = document.getElementById('smallImage');
    // Unhide image elements
    smallImage.style.display = 'block';
    // Show the captured photo (inline CSS rules are used to resize the image)
    smallImage.src = "data:image/jpeg;base64," + imageData;
}

// ---------------------
// GetPicture
// ---------------------

function GetPicture(source) 
{
    // Retrieve image file location from specified source
    navigator.camera.getPicture
        (
        onPhotoURISuccess,
        onCameraFail, 
        { quality: 50, destinationType: destinationType.FILE_URI, sourceType: source}
        );
}

function onPhotoURISuccess(imageURI) 
{
    // Get image handle
    var largeImage = document.getElementById('largeImage');
    // Unhide image elements
    largeImage.style.display = 'block';
    // Show the captured photo (inline CSS rules are used to resize the image)
    largeImage.src = imageURI;
}
