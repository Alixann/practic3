'use strict'

const swiper = new Swiper('.swiper', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	observer: true,
	breakpoints: {
		768: {
		enabled: false,
        spaceBetween: 0
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
	},
});