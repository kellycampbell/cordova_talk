(function () {
var $ = window.Zepto;

$(document.body).on('go_page', function(p) {
  console.log("Register Cast");
  $('#chrome-cast').on('click', function(e) {
    console.log("CHROME CAST");
    e.preventDefault();
    e.stopPropagation();
    if (chrome.cast.isAvailable) {
      chrome.cast.requestSession();
    }
  });
});

}());
