$(document).ready(function(){

	$('.nav-icon').click(function(){
		$('.full-nav').addClass('open');
	});

	$('.nav-close').click(function(){
		$('.full-nav').removeClass('open');
	});

	$(window).scroll(function(){
		var sc = $(window).scrollTop();
		if(sc > 100){
			$('.header_nav').addClass('sticky');
		}
		else{
			$('.header_nav').removeClass('sticky');
		}

	});
});

$(document).ready(function(){
	$('.bxslider').bxSlider({
		mode: 'horizontal',
		removeSlides: 1,
		slideMargin: 40,
		infiniteLoop: true,
		minSlides: 1,
		maxSlides: 1,
		speed: 20,
	});
});
