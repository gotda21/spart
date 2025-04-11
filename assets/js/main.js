


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
	
});

// $(window).on('load', function () {
// 	updateSizes();
// 	loadFunc();
// 	// allDefautAnim();
// 	// burgerMobile();
// 	scrollNav();
// 	if(windowWidth > mediaPoint1) {
// 		popup('14px', '.send_form', '.popup_send');
// 		popup('14px', '.call_form', '.popup_call');
// 	} else {
// 		popup('0', '.send_form', '.popup_send');
// 		popup('0', '.call_form', '.popup_call');
// 		burgerMobile();
// 	}
// });

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function close(closes) {
	$(closes).toggleClass('active');
		setTimeout(function() {
			$(closes).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: transparent'].join(';');
var message = 'Developed by KotoFeelGood https://api.whatsapp.com/send?phone=79615311386&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0';
console.info('%c%s', styles, message);

const heroSlider = new Swiper('.hero_swiper', { 
	// loop: true,
	slidesPerView: 1, // Показывать только 1 слайд
	spaceBetween: 0,
	// watchSlidesProgress: true, // Следить за прогрессом слайдов
	loop: false, // Отключить бесконечный цикл (если нужно)
	allowTouchMove: true, 
	grabCursor: true,     
	effect: 'slide',       
	speed: 600,             
	
	
	// watchSlidesProgress: true,
	// watchSlidesVisibility: true,
	// slideToClickedSlide: false,
	// freeMode: false,       
	// resistance: false,   
	navigation: {
		enabled: true,
		nextEl: '.hero_button-next',
		prevEl: '.hero_button-prev',
	},
	pagination: {
		el: '.hero_pagination',
		clickable: true,
	},
	// scrollbar: {
	// 	// enabled: true,
	// 	el: '.hero_main_swiper_swiper_scrollbar',
	// },
});

const brandsSlider = new Swiper('.brands_swiper', { 
	slidesPerView: 6,
	 // Показывать только 1 слайд
	spaceBetween: 44,
	// watchSlidesProgress: true, // Следить за прогрессом слайдов
	allowTouchMove: true,
	grabCursor: true,
	effect: 'slide',
	speed: 600,
	
	
	// watchSlidesProgress: true,
	// watchSlidesVisibility: true,
	// slideToClickedSlide: false,
	freeMode: false,
	resistance: false,   
	navigation: {
		enabled: true,
		nextEl: '.brands_button-next',
		prevEl: '.brands_button-prev',
	},
});

$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})



const btnSubmit = document.querySelectorAll('input[type="submit"]')
Array.from(btnSubmit).map((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		close('.close')
	})
})


// function allDefautAnim(bottom = false, start = '-=30% center', end = 'bottom') {
// 	const paralaxWrapper = Array.from(document.querySelectorAll('.sec_anim')).map(function(el) {
// 		const arr = Array.from(el.querySelectorAll('.el_anim')).map(function (item, index) {
// 			const tl = gsap.timeline();
// 			ScrollTrigger.create({
// 				animation: tl,
// 				trigger: el,
// 				start: start,
// 				end: end,
// 				ease: 'none',
// 			})
// 			tl.fromTo(item, {
// 				y: 100, 
// 				duration: .4,
// 				autoAlpha: 0,
// 			}, {
// 				y: 0,
// 				autoAlpha: 1,
// 				delay: 0.1 + (0.1 * index),
// 			});
// 		});
// 	});
// }

// function popup(pr) {

// 	let popupForms = document.querySelector('.popup')
// 	let popupFormsTrigger = document.querySelectorAll('.send_form')
// 	let popupFormsClose = document.querySelectorAll('.popupFormsClose')
// 	let popupFormsSubmit = popupForms.querySelector('button[type="submit"]')
// 	const burgerPopup = document.querySelector('.burger')
	
// 	Array.from(popupFormsTrigger).map((item) => {
// 		item.addEventListener('click', () => {
// 			popupForms.classList.add('active');
// 			win.style.overflow = "hidden";
// 			win.style.paddingRight = pr; 
// 			burgerPopup.classList.remove('active')
// 		})
// 	})


// 	Array.from(popupFormsClose).map((item) => {
// 		item.addEventListener('click', () => {
// 			popupForms.classList.remove('active')
// 			win.style.overflow = "";
// 			win.style.paddingRight = ""; 
// 		})
// 	})

// 	popupFormsSubmit.addEventListener('click', () => {
// 		popupForms.classList.remove('active')
// 		win.style.overflow = "";
// 		win.style.paddingRight = ""; 
// 	})
// }

// function burgerMobile() {
// 	const triggerBurger = document.querySelector('.burger_trigger')
// 	const burgerPopup = document.querySelector('.burger')
// 	const burgerFail = document.querySelectorAll('.burger_closer')
	
// 	triggerBurger.addEventListener('click', () => {
// 		burgerPopup.classList.add('active')
// 		win.style.overflow = "";
// 	})

// 	triggerBurger.addEventListener('click', () => {
// 		burgerPopup.classList.add('active')
// 		win.style.overflow = "";
// 	})

// 	Array.from(burgerFail).map((item) => {
// 		item.addEventListener('click', () => {
// 			burgerPopup.classList.remove('active')
// 			win.style.overflow = "";
// 		})
// 	})

// }

// $(document).ready(function() {

// 	$(".forms_action input").on("blur input focus", function() {
// 		var $field = $(this).closest("li");
// 		if (this.value) {
// 			$field.addClass("filled");
// 		} else {
// 			$field.removeClass("filled");
// 		}
// 	});
	
// 	$(".forms_action input").on("focus", function() {
// 		var $field = $(this).closest("li");
// 		if (this) {
// 			$field.addClass("filled");
// 		} else {
// 			$field.removeClass("filled");
// 		}
// 	});
// })

// function accordion(title, content) {
// 	// hide all content	
// 	let accordionTitle = $(title),
// 		accordionContent = $(content);
// 	$(accordionContent).not(":nth-child(1)")
	
// 	$(accordionTitle).on('click', function () {
// 		let $this = $(this);
// 		$this.parent().toggleClass('active_mod').siblings().removeClass('active_mod');
// 		$(accordionContent).slideUp();

// 		if (!$this.next().is(":visible")) {
// 			$this.next().slideDown();
// 		}
// 	});
// };

// accordion('.faq_item_head', '.faq_item_content');

// function popup(style, btn, popups) {

// 	let trigger = document.querySelectorAll(btn);
// 	let pop = document.querySelector(popups)

// 	let remove = pop.querySelectorAll('.remove_popup')



// 	trigger.forEach(item => {
// 		item.addEventListener('click', () => {
// 			pop.classList.add('active')
// 			win.style.overflow = "hidden";
// 			win.style.paddingRight = style; 
// 		})
// 	});

// 	remove.forEach(item => {
// 		item.addEventListener('click', () => {
// 			pop.classList.remove('active')
// 			win.style.overflow = "";
// 			win.style.paddingRight = ""; 
// 		})
// 	});




// }
$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})

// https://twitter.com/uixmat

function scrollNav() {
  $('.smooth_scroll').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 160
    }, 600);
    return false;
  });
}

$(window).on("scroll", function () {
	var scrolled = $(this).scrollTop();
	if( scrolled > 50 ) {
			$('.header').addClass('fixed');
	}   
	if( scrolled <= 50 ) {     
			$('.header').removeClass('fixed');
	}
});




function burgerMobile() {
	const burger = document.querySelector('.header_nav')
	const burgerTrigger = document.querySelector('.header_burger')
	const header = document.querySelector('.header')
	const burgerRemove = document.querySelectorAll('header_nav_list li')

	burgerRemove.forEach(item => {
		item.addEventListener('click', function() {
			burgerTrigger.classList.remove('active')
			burger.classList.remove('active')
			header.classList.remove('active')
		})
	});

	burgerTrigger.addEventListener('click', () => {
		burgerTrigger.classList.toggle('active')
		burger.classList.toggle('active')
		header.classList.toggle('active')
	})

}











































