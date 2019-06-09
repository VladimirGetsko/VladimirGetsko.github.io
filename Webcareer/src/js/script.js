$(document).ready(function(){
  $(".slider").owlCarousel({
		items: 1,
		margin: 30,
		center: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 13000,
		responsive:{
			600:{
				items:2
				
			},
		}
	});

	$(".btn-nav").on("click", function(){
		let target = $(this).data("target");
		$(target).toggleClass("header__nav-list--open");
	});

});