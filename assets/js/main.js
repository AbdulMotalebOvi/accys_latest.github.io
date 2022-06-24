

$(document).ready(function(){
	
	$(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
	
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    $(".carousel").owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,	
		autoplayHoverPause: true,
		smartSpeed: 1000,
        dots: true,

	});

	AOS.init();
    
});
