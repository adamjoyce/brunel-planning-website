window.onload = function() {
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
