
// $(document).ready(function () {
//   // hide creative text by default
//   $("#creative").css("display", "none");

//   // show loader for 4 seconds
//   setTimeout(function () {
//     $(".loading").addClass("hide");

//     // fade in main content
//     $(".main-content").addClass("show");

//     // fade in creative text after main content fades in
//     setTimeout(function () {
//       $("#creative")
//         .html("Your Next Creative")
//         .css("color", "black") // change text color to black
//         .addClass("typing fade-in")
//         .delay(1000)
//         .queue(function () {
//           $(this).removeClass("typing");
//           $("#creative").fadeOut(500, function () {
//             $("body").css("overflow", "auto");
//           });
//           $(this).dequeue();
//         });
//     }, 500);
//   }, 6000);
// });

// function fadeOut(el, callback) {
// el.style.opacity = 1;

// (function fade() {
// if ((el.style.opacity -= 0.1) < 0) {
// el.style.display = "none";
// if (typeof callback === "function") callback();
// } else {
// requestAnimationFrame(fade);
// }
// })();
// }

// function fadeIn(el, callback) {
// el.style.opacity = 0;
// el.style.display = "block";
// el.classList.add("fade-in");

// (function fade() {
// var val = parseFloat(el.style.opacity);
// if (!((val += 0.1) > 1)) {
// el.style.opacity = val;
// requestAnimationFrame(fade);
// } else {
// el.classList.remove("fade-in");
// el.classList.add("show");
// if (typeof callback === "function") callback();
// }
// })();
// }

// window.addEventListener("load", function () {
// //added to stop the screen from scrolling on load
// if (window.location.hash) {
// window.location.hash = "";
// }

// var loading = document.getElementById("loading");
// var creative = document.querySelector(".creative");
// var creativeText = document.getElementById("creative");
// var isCreativeTextShown = false;

// setTimeout(function () {
// //fade out the loading element
// fadeOut(loading);
// //wait for the loading element to disappear before fading in the creative element
// setTimeout(function () {
// fadeIn(creative, function () {
//   // show creative text after main content fades in
//   if (!isCreativeTextShown) {
//     isCreativeTextShown = true;
//     creativeText.innerHTML = "Your Next Creative";
//     creativeText.style.color = "black";
//     creativeText.classList.add("typing", "fade-in");
//     setTimeout(function () {
//       creativeText.classList.remove("typing");
//       fadeOut(creativeText);
//     }, 1000);
//   }
// });
// }, 1000);
// }, 2000);
// });
