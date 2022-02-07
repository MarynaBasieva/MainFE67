jQuery.noConflict();
jQuery(document).ready(function () {
    'use strict';


    let carousel = jQuery('#slider');
	carousel.owlCarousel({  
		items: 3,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: ['', ''],
		dots: false,
		dotsEach: true,
		mouseDrag: true,
		margin: 10,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			479:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			576:{
				items: 1,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			
			700:{
				items: 1,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			991:{
				items: 1,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			1199:{
				items: 1,
				autoplay: true,
				mouseDrag: true
			}
		}
    });
});

'use strict';

 

