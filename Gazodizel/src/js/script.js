$(document).scroll(function(){
	$('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
});

$(window).scroll(function () {
	if ($(this).scrollTop() > $(this).height()) {
		$('.button__top').addClass('active');
	} else {
		$('.button__top').removeClass('active');
	}
});
$('.button__top').click(function () {
	$('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
});



$(document).ready(function() {

	$("form.callback").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.contacts__success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.contacts__success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});

$(window).on('load', function () {
	$('.preloader').delay(1000).fadeOut('slow');
});