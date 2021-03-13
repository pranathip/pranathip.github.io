// Change bg color when scrolling
// $(window).on("scroll touchmove", function() {
//     if ($(document).scrollTop() >= $(".nav").position().top) {
//         $('body').css('background', $(".nav").attr("data-color"));

//     };

//     if ($(document).scrollTop() > $("#masthead").position().top) {
//         $('body').css('background', $("#masthead").attr("data-color"));
//     };
// });

// Progress bar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}