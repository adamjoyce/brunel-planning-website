window.onload = function() {
  // Bind navigation hamburger events.
  var hamburgers = document.getElementsByClassName('hamburger');
  var navMenu = document.getElementsByClassName('nav-mobile')[0];
  if (hamburgers && navMenu) {
    // Toggle the drop-down menu.
    hamburgers[0].addEventListener('click', function() {
      navMenu.classList.toggle('opened');
      // Show the top border if opening.
      if (navMenu.classList.contains('opened'))
        navMenu.style.borderTop = '1px solid #fff';
    });
    // Remove the top border once closed.
    navMenu.addEventListener('transitionend', function() {
      if (!navMenu.classList.contains('opened')) {
        navMenu.style.borderTop = '0';
      }
    });
  }

  // Side Slide Elements.
  var slideInElements = document.getElementsByClassName('content-wrapper');
  if (slideInElements) {
    for (var i = 0; i < slideInElements.length; i++) {
      if (slideInElements[i].classList.contains('loading-left'))
        slideInElements[i].classList.remove('loading-left');
      else
        slideInElements[i].classList.remove('loading-right');
    }
  }
}
