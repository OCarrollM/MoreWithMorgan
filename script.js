let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Always show navbar if user is at the very top of the page
  if (currentScroll <= 0) {
    navbar.classList.remove('.navbar-hide');
    lastScroll = 0;
    return;
  }

  if (currentScroll > lastScroll) {
    // User scrolled down -- hide the navbar
    navbar.classList.add('.navbar-hide');
  } else {
    // User scrolled up -- show the navbar
    navbar.classList.remove('.navbar-hide');
  }

  // Update lastScroll to the new position
  lastScroll = currentScroll;
});
