// Get the modal element
var modal = document.getElementById("resume-modal");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the nav link, open the modal
document.querySelector("nav a[href='#']").addEventListener("click", function() {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
