window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	// mobile menu //

	const menuBtn = document.querySelector('.menu-btn'),
				mobileMenu = document.querySelector('.header-mob_menu'),
				mobileMenuList = mobileMenu.querySelectorAll('.header-mob_menu-list'),
				scroll = calcScrooll();
	let menuOpen = false;

	menuBtn.addEventListener('click', () => {
		if (!menuOpen) {
			menuBtn.classList.add('open');
			mobileMenu.classList.add('open');
			document.body.style.overflow = "hidden";
			document.body.style.marginRight = `${scroll}px`;
			menuOpen = true;
		} else {
			menuBtn.classList.remove('open');
			mobileMenu.classList.remove('open');
			document.body.style.overflow = "";
			document.body.style.marginRight = `0px`;
			menuOpen = false;
		}
	});

	function hidenMobileMenu() {
		mobileMenuList.forEach(item => {
			item.addEventListener('click', () => {
				if (!menuOpen) {
					menuBtn.classList.add('open');
					mobileMenu.classList.add('open');
					document.body.style.overflow = "hidden";
					document.body.style.marginRight = `${scroll}px`;
					menuOpen = true;
				} else {
					menuBtn.classList.remove('open');
					mobileMenu.classList.remove('open');
					document.body.style.overflow = "";
					document.body.style.marginRight = `0px`;
					menuOpen = false;
				}
			});
		});
	}

	hidenMobileMenu();

	// calcScrooll // 

	function calcScrooll () {
		let div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}

	// Tabs //

	const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
		const header = document.querySelector(headerSelector),
			tab = document.querySelectorAll(tabSelector),
			content = document.querySelectorAll(contentSelector);

		function hideTabContent() {
			content.forEach(item => {
				item.style.display = 'none';
			});

			tab.forEach(item => {
				item.classList.remove(activeClass);
			});
		}

		function showTabContent(i = 0) {
			content[i].style.display = 'block';
			tab[i].classList.add(activeClass);
		}

		hideTabContent();
		showTabContent();

		header.addEventListener('click', (e) => {
			const target = e.target;
			if (target &&
				(target.classList.contains(tabSelector.replace(/\./, "")) ||
					target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
				tab.forEach((item, i) => {
					if (target == item || target.parentNode == item) {
						hideTabContent();
						showTabContent(i);
					}
				});
			}
		});
	};

	tabs('.advantages_menu', '.advantages_menu-tab', '.advantages_descr', 'tab-active');

	// Map  //

	let contactMap = document.querySelector('.contact_map'),
			contactMapContacts = document.querySelector('.contact_map-contacts');

	contactMap.onmouseover = () => {
		contactMapContacts.classList.add('hide_background');
	};
	contactMap.onmouseout = () => {
		contactMapContacts.classList.remove('hide_background');
	};

	// Timer //
	let deadline = '2021-09-31';

	const addZero = (num) => {
		if (num <= 9) {
			return '0' + num;
		} else {
			return num;
		}
	};

	const timer = (id, deadline) => {

		const getTimeRemaining = (endtime) => {
			const t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor((t / 1000) % 60),
				minutes = Math.floor((t / 1000 / 60) % 60),
				hours = Math.floor((t / (1000 * 60 * 60)) % 24),
				days = Math.floor((t / (1000 * 60 * 60 * 24)));

			return {
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		};

		const setClock = (selector, endtime) => {
			const timer = document.querySelector(selector),
				days = timer.querySelector("#days"),
				hours = timer.querySelector("#hours"),
				minutes = timer.querySelector("#minutes"),
				seconds = timer.querySelector("#seconds"),
				timeInterval = setInterval(updateClock, 1000);

			updateClock();

			function updateClock() {
				const t = getTimeRemaining(endtime);

				days.textContent = addZero(t.days);
				hours.textContent = addZero(t.hours);
				minutes.textContent = addZero(t.minutes);
				seconds.textContent = addZero(t.seconds);

				if (t.total <= 0) {
					days.textContent = "00";
					hours.textContent = "00";
					minutes.textContent = "00";
					seconds.textContent = "00";

					clearInterval(timeInterval);
				}
			}
		};

		setClock(id, deadline);
	};

	timer('.event_timer-numbers', deadline);

	// Slider

	const sliders = (slides, prev, next, scrollInterval) => {
		let slideIndex = 1,
				paused = false;

		const items = document.querySelectorAll(slides),
					numSlider = document.querySelector('#number-slider'),
					totalSlider = document.querySelector('#total-slider'),
					progressbar = document.querySelector('.clients_navigation .progressbar');
					

		function showSlides(n) {
			if (n > items.length) {
				slideIndex = 1;
			}

			if (n < 1) {
				slideIndex = items.length;
			}

			items.forEach(item => {
				item.classList.add('animated');
				item.style.display = 'none';
			});

			items[slideIndex - 1].style = 'block';
						
			progressbar.style.width = (100 / items.length) * slideIndex + '%';
			
			numSlider.textContent = addZero(slideIndex);
		}
		
		totalSlider.textContent = addZero(items.length);

		showSlides(slideIndex);

		function plusSlides(n) {
			showSlides(slideIndex += n);
		}

		try {
			const prevBtn = document.querySelector(prev),
						nextBtn = document.querySelector(next);

			prevBtn.addEventListener('click', () => {
				plusSlides(-1);
				items[slideIndex - 1].classList.remove('slideInRight');
				items[slideIndex - 1].classList.add('slideInLeft');
			});

			nextBtn.addEventListener('click', () => {
				plusSlides(1);
				items[slideIndex - 1].classList.remove('slideInLeft');
				items[slideIndex - 1].classList.add('slideInRight');
			});
		} catch(e) {}

		function activateAnimation() {
			paused = setInterval(function() {
				plusSlides(1);
				items[slideIndex - 1].classList.remove('slideInLeft');
				items[slideIndex - 1].classList.add('slideInRight');
			}, scrollInterval);
		}

		activateAnimation();

		items[0].parentNode.addEventListener('mouseenter', () => {
			clearInterval(paused);
		});

		items[0].parentNode.addEventListener('mouseleave', () => {
			activateAnimation();
		});
		
	};

	sliders('.clients_slider-item', '.clients-prev-btn', '.clients-next-btn', 5000);

	// Skills progress

	const design = document.querySelector('.about .design'),
				branding = document.querySelector('.about .branding'),
				illustration = document.querySelector('.about .illustration'),
				animItems = document.querySelectorAll('.about .anim-skill');

	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				design.classList.add('design-width');
				branding.classList.add('branding-width');
				illustration.classList.add('illustration-width');
			} else {
				design.classList.remove('design-width');
				branding.classList.remove('branding-width');
				illustration.classList.remove('illustration-width');
			}
		}
	}

	function offset (el) {
		const rect = el.getBoundingClientRect(),
					scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop, left: rect.left + scrollLeft
		};
	}
	
	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
	}
});
