// Variables
const sliderLine = document.querySelector('.slider-line');
const prevBtn = document.querySelector('.button-prev');
const nextBtn = document.querySelector('.button-next');
const dots = document.querySelectorAll('.dot');

let position = 0;
let dotIndex = 0;

// Functions
const nextSlider = (() => {

	if (position < ((dots.length - 1) * 600)) {
		position += 600;
		dotIndex++;
	} else {
		position = 0;
		dotIndex = 0;
	}

	sliderLine.style.left = -position + 'px';
	thisSlide(dotIndex);
});

const prevSlider = (() => {

	if (position > 0) {
		position -= 600;
		dotIndex--;
	} else {
		position = (dots.length - 1) * 600;
		dotIndex = dots.length - 1;
	}

	sliderLine.style.left = -position + 'px';
	thisSlide(dotIndex);
});

const thisSlide = (index) => {
	for (let dot of dots) {
		dot.classList.remove('active');
	}
	dots[index].classList.add('active');
};

// Ivent Listener
nextBtn.addEventListener('click', nextSlider);
prevBtn.addEventListener('click', prevSlider);

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		position = 600 * index;
		sliderLine.style.left = -position + 'px';
		dotIndex = index;
		thisSlide(dotIndex);
	});
});

// Set Interval
// setInterval(() => {
// 	nextSlider()
// }, 3000);