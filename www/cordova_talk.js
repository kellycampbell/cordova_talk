
(function () {
var $ = window.Zepto;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  window.StatusBar.hide();
}

var isSharing = false;

$(document.body).on('go_page', function(p) {
  $('#social-sharing-demo').on('click', function(e) {
    console.log("SOCIAL SHARE");
    e.preventDefault();
    e.stopPropagation();
    if (!isSharing) { // click event happens like 13 times?? 
      isSharing = true;
      window.plugins.socialsharing.shareViaTwitter("Tweeting from my talk about Cordova development @liberty_js", window.cordova_talk_picture, 'http://libertyjs.com/#/speakers',
          function success() {
            isSharing = false;
            $(document.body).click();
          }, 
          function failed() {
            isSharing = false;
            $(document.body).click();
          });
    }
  });
});




}());
