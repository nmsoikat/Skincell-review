$(document).ready(function () {

  // Get the header
  var rightSide = document.querySelector(".right-side");
  // Get the offset position of the navbar
  var topDistance = rightSide.offsetTop;
  window.onscroll = function() {  
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    if (window.pageYOffset > topDistance) {
      rightSide.classList.add('scrolled')
    } else {
      rightSide.classList.remove('scrolled')
    }
  };

  var btn = $('.up');
	$(window).on('scroll', function () { 
		var a = $(this), 
			height = a.height(),
			top = a.scrollTop();

		if (top > height) {
			if (!btn.is(':visible')) {
				btn.show();
			}
		} else {
			btn.hide();
		}
  });
  

});


