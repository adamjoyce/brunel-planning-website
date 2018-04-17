// Js is enabled so displayed slide elements.
var slideInElements = document.getElementsByClassName('content-wrapper');
if (slideInElements) {
  for (var i = 0; i < slideInElements.length; i++) {
    slideInElements[i].classList.remove('js-hidden');
  }
}

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

  // Init Slide Elements.
  if (slideInElements) {
    for (var i = 0; i < slideInElements.length; i++) {
      if (slideInElements[i].classList.contains('loading-left'))
        slideInElements[i].classList.remove('loading-left');
      else
        slideInElements[i].classList.remove('loading-right');
    }
  }

  // Preload and Switch to Large Background Image.
  var win, doc, img, header, enhancedClass;

  // Quit early if older browser (e.g. IE 8).
  if (!('addEventListener' in window)) {
    return;
  }

  win = window;
  doc = win.document;
  img = new Image();
  header = doc.querySelector('.bg-image');
  enhancedClass = 'bg-image-enhanced';

  // Rather convoluted, but parses out the first mention of a background
  // image url for the enhanced header, even if the style is not applied.
  var bigSrc = (function () {
    // Find all of the CssRule objects inside the inline stylesheet.
    // Given id to be consistent across browsers.
    var styles = doc.getElementById('inline-styles').sheet.cssRules;
    // Fetch the background-image declaration...
    console.log(styles);
    var bgDecl = (function () {
      // ...via a self-executing function, where a loop is run
      var bgStyle, i, l = styles.length;
      for (i=0; i<l; i++) {
        // ...checking if the rule is the one targeting the
        // enhanced header.
        if (styles[i].selectorText &&
            styles[i].selectorText == '.'+enhancedClass) {
          // If so, set bgDecl to the entire background-image
          // value of that rule
          bgStyle = styles[i].style.backgroundImage;
          // ...and break the loop.
          break;
        }
      }
      // ...and return that text.
      return bgStyle;
    }());
    // Finally, return a match for the URL inside the background-image
    // by using a fancy regex I Googled up, as long as the bgDecl
    // variable is assigned at all.
    return bgDecl && bgDecl.match(/(?:\(['|"]?)(.*?)(?:['|"]?\))/)[1];
  }());

  // Assign an onLoad handler to the dummy image *before* assigning the src
  img.onload = function () {
    header.className += ' ' + enhancedClass;
  };
  // Finally, trigger the whole preloading chain by giving the dummy
  // image its source.
  if (bigSrc) {
    img.src = bigSrc;
  }
}
