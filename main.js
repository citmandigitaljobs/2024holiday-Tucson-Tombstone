// HAMBURGER MENU
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
//AND ADDED EVENT LISTENER TO MAKE MENU CLOSE ON LINK CLICK
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  x.addEventListener("click", function () {
    x.style.display = "none";
  });
}

// START CAROUSEL

let imageIndex = 1;
showSlideImage(imageIndex);

// Next/previous controls
function plusSlideImage(m) {
  showSlideImage((imageIndex += m));
}

// Thumbnail image controls
// function currentSlideImage(m) {
//   showSlideImage((imageIndex = m));
// }

function showSlideImage(m) {
  let j;
  let slideImage = document.getElementsByClassName("carousel-image");
  if (m > slideImage.length) {
    imageIndex = 1;
  }
  if (m < 1) {
    imageIndex = slideImage.length;
  }
  for (j = 0; j < slideImage.length; j++) {
    slideImage[j].style.display = "none";
  }

  slideImage[imageIndex - 1].style.display = "block";
  // dotsMonth[imageIndex - 1].className += " active";
}
// END CAROUSEL
