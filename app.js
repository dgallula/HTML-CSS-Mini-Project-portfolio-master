const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
	const carouselImages = document.querySelector('.carousel-images');
	const images = document.querySelectorAll('.carousel-image');
	const prevButton = document.querySelector('.carousel-prev');
	const nextButton = document.querySelector('.carousel-next');
	let index = 0;

	function updateCarousel() {
			const offset = -index * 100;
			carouselImages.style.transform = `translateX(${offset}%)`;
	}

	prevButton.addEventListener('click', function() {
			index = (index > 0) ? index - 1 : images.length - 1;
			updateCarousel();
	});

	nextButton.addEventListener('click', function() {
			index = (index < images.length - 1) ? index + 1 : 0;
			updateCarousel();
	});

	// Optionally add auto-slide functionality
	setInterval(function() {
			nextButton.click();
	}, 5000); // Change slide every 5 seconds
});

