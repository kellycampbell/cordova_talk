
(function () {
var $ = window.Zepto;

var Camera;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
    Camera = navigator.camera;

}

var isTakingPicture = false;

function camSuccess(result) {
  console.log('result = ', result);
  $('#picture')[0].src = "data:image/jpeg;base64," + result;
  window.cordova_talk_picture = "data:image/jpeg;base64," + result;
  isTakingPicture = false;
}

function camError(result) {
  console.log('error result = ', result);
  isTakingPicture = false;
}

$(document.body).on('go_page', function(p) {
  $('#take-picture').on('click', function(e) {
    console.log("TAKE PICTURE");
    e.preventDefault();
    e.stopPropagation();
    if (!isTakingPicture) { // Hack to keep from being called N times per click because I'm not removing the event listener yet.
      isTakingPicture = true;
      Camera.getPicture(camSuccess, camError, 
        { quality : 75,
          destinationType : Camera.DestinationType.DATA_URL,
          sourceType : Camera.PictureSourceType.CAMERA,
          allowEdit : false,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 1024,
          targetHeight: 768,
          saveToPhotoAlbum: false,
          cameraDirection: Camera.Direction.FRONT
        });
    }
  });

});

}());
