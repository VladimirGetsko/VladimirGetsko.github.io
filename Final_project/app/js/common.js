// $(document).ready(function() {
// 	$("#my-menu").mmenu({
// 		 // options
// 	}, {
// 		 // configuration
// 		 offCanvas: {
// 				pageNodetype: "section"
// 		 }
// 	});
// });

$(function () {

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-auto-repair.png" alt="Автомастерская Peoples choice">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	let api = $('#my-menu').data('mmenu');
	api.bind('opened', function () {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});


	function servicesCarousel() {
		$('.services-carousel__item').each(function () {
			let ths = $(this),
				thsh = ths.find('.services-carousel__item-content').outerHeight();
			ths.find('.services-carousel__item-image1').css('min-height', thsh);
			ths.find('.services-carousel__item-image2').css('min-height', thsh);
			ths.find('.services-carousel__item-image3').css('min-height', thsh);
			ths.find('.services-carousel__item-image4').css('min-height', thsh);
		});
	} servicesCarousel();


	$('.services-carousel').on('initialized.owl.carousel', function () {
		setTimeout(function () {
			servicesCarousel();
		}, 100);
	});
	$('.services-carousel').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	$('section .h2').each(function () {
		let ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'))
	});

	$('select').selectize();

	$('.reviews-carousel').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		// autoHeight: true
	});

	$('.partners-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		responsiveClass: true,
		autoplay: true,
		autoplayTimeout: 3000,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
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

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Resize window
	function onResize() {
		$('.services-carousel__item-content').equalHeights();
	} onResize();
	window.onResize = function () {
		onResize()
	};

});

$(window).on('load', function () {
	$('.preloader').delay(1000).fadeOut('slow');
});


// function initMap() {
//   var mapCenter = {lat: 49.0613575, lng: 33.4219845};

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 18,
//     center:mapCenter
//   });

//   var image = '../img/m1.png';
//   var beachMarker = new google.maps.Marker({
//     position: mapCenter,
// 		map: map,
// 		title: "People's choice",
//     icon: image
// 	});
// }


function initMap() {

	var styledMapType = new google.maps.StyledMapType(
		[
			{
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#1d2c4d"
					}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#8ec3b9"
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#1a3646"
					}
				]
			},
			{
				"featureType": "administrative.country",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#4b6878"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#64779e"
					}
				]
			},
			{
				"featureType": "administrative.province",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#4b6878"
					}
				]
			},
			{
				"featureType": "landscape.man_made",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#334e87"
					}
				]
			},
			{
				"featureType": "landscape.natural",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#023e58"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#283d6a"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#6f9ba5"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#1d2c4d"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#023e58"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#3C7680"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#304a7d"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#98a5be"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#1d2c4d"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#2c6675"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#255763"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#b0d5ce"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#023e58"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#98a5be"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#1d2c4d"
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#283d6a"
					}
				]
			},
			{
				"featureType": "transit.station",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#3a4762"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#0e1626"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#4e6d70"
					}
				]
			}
		],
		{ name: 'Styled Map' });

	let mapCenter = { lat: 49.0613575, lng: 33.4219845 };

	let map = new google.maps.Map(document.getElementById('map'), {
		mapCenter: { lat: 49.0613575, lng: 33.4219845 },
		zoom: 17,
		center: mapCenter,
		mapTypeControlOptions: {
			mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
				'styled_map']
		}
	});

	let image = '../img/m2.png';
	let beachMarker = new google.maps.Marker({
		position: mapCenter,
		map: map,
		title: "People's choice",
		icon: image
	});

	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
}

const servicesTexts = $('.review__text');

const arr = Array.prototype.map.call(servicesTexts, el => {
	let a = el.innerText.split('');
	if (a.length < 400) return el.innerText;
	let newA = a.slice(0, 400);
	let index = newA.lastIndexOf(' ');
	return newA.slice(0, index).join('') + '...';
});

Array.prototype.forEach.call(servicesTexts, (el, idx) => {
	el.innerText = arr[idx];
});



