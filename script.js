// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById('navbar');
  const viewportWidth = window.innerWidth; // check screen size

  // If the viewport is below 600px, always show the navbar
  if (viewportWidth < 600) {
    navbar.style.top = "0";
    return; // exit the scroll function early
  }
  
  // Otherwise, do the classic hide-on-scroll logic
  if (prevScrollpos > currentScrollPos) {
    // user scrolled UP -> show
    navbar.style.top = "0";
  } else {
    // user scrolled DOWN -> hide
    navbar.style.top = "-50px";
  }

  prevScrollpos = currentScrollPos;
});


function readMoreBtnWed() {
  var dots = document.getElementById("read");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function readMoreBtnCar() {
  var dots = document.getElementById("read2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function readMoreBtnRep() {
  var dots = document.getElementById("read3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}