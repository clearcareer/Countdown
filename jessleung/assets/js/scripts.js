
jQuery(document).ready(function() {
	
    /*
	    Top menu
	*/
	$('.show-menu a, .hide-menu a').tooltip();
	// show/hide menu
	$('.show-menu a').on('click', function(e) {
		e.preventDefault();
		$(this).fadeOut(100, function(){ $('nav').slideDown(); });
	});
	$('.hide-menu a').on('click', function(e) {
		e.preventDefault();
		$('nav').slideUp(function(){ $('.show-menu a').fadeIn(); });
	});
	// navigation
	$('nav a').on('click', function(e) {
		e.preventDefault();
		var element_class = $(this).attr('class');
		var scroll_to = 0;
		var nav_height = $('nav').height();
		if(element_class == 'menu-top') { scroll_to = $(".coming-soon").offset().top; }
		else if(element_class == 'menu-subscribe') { scroll_to = $(".subscribe").offset().top - nav_height - 60; }
		else if(element_class == 'menu-project') { scroll_to = $(".about").offset().top - nav_height - 60; }
		else if(element_class == 'menu-testimonials') { scroll_to = $(".testimonials").offset().top - nav_height - 60; }
		else if(element_class == 'menu-about-us') { scroll_to = $(".whos-behind").offset().top - nav_height - 60; }
		else if(element_class == 'menu-contact') { scroll_to = $(".contact").offset().top - nav_height - 60; }
		
		if($(window).scrollTop() != scroll_to && element_class !== undefined) {
			$('html, body').animate({scrollTop: scroll_to}, 1000);
		}
	});
	
    /*
        Background slideshow
    */
    $('.coming-soon').backstretch([
      "assets/img/backgrounds/1.jpg"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    ], {duration: 3000, fade: 750});
    
    $('.about-container').backstretch("assets/img/backgrounds/2.jpg");
    
    $('.whos-behind-container').backstretch("assets/img/backgrounds/4.jpg");

    /*
        Countdown initializer
    */
    var now = new Date();
    var countTo = "2016/08/16";    
    $('.timer').countdown(countTo, function(event) {
    	$(this).find('.days').text(event.offset.totalDays);
    	$(this).find('.hours').text(event.offset.hours);
    	$(this).find('.minutes').text(event.offset.minutes);
    	$(this).find('.seconds').text(event.offset.seconds);
    });
    
    
    
    
});

