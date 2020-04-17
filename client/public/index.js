var burger = $('.burger');
var close = $('.close');

let overlayText = $('.overlay-text').text();
console.log(overlayText)
console.log(overlayText.toUpperCase())
var upper = overlayText.toUpperCase()



function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    $(".navbar").css("background-color", "rgba(100, 100, 100)");

  } else {
    $(".navbar").css("background", "none");

  }
}



$(document).ready(function () {
  window.onscroll = function () { scrollFunction() };
  //setting burger change when clicked
  burger.on('click', function () {
    burger.css({ "display": "none" });
    close.css({ 'display': 'block' });
  })
  close.on('click', function () {
    burger.css({ "display": "block" });
    close.css({ 'display': 'none' });
  })

  // the end of document.ready
});

