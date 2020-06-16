export const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));
const buttons = Array.from(document.querySelectorAll('.button'));
const endSlides = Array.from(document.querySelectorAll('.end'));
const dotsNav = document.querySelector('.dots-nav');
const dots = Array.from(document.querySelectorAll('.dot'));

var counter = 0;

//interval time for autoslide movement every 5 seconds
var autoInterval = window.setInterval(autoChangeSlide, 5000);

// event listener for arrow buttons
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    //reactivates transition effect
    slider.style.transition = 'ease-in-out 0.5s';
    // sets the counter depending on button pressed
    updateCounter(button.id);
    goToSlide();
    // stops the automatic movement
    clearInterval(autoInterval);
    //then restarts it
    autoInterval = window.setInterval(autoChangeSlide, 5000);
  });
});

//function to go to selected slide
function goToSlide() {
  //finds distance to selected slide
  const distance = slides[counter].offsetLeft + 'px';
  //moves to slide
  slider.style.transform = `translateX(-${distance})`;
  // updates the dot referencing the slide
  updateCurrentDot();
}

//updates the counter adding if its the next slide taking away if its previous
function updateCounter(direction) {
  if (direction === 'next' && counter !== slides.length - 1) {
    counter++;
  } else if (direction === 'prev' && counter !== 0) {
    counter--;
  }
}

// event listener that fires at the end of the transition if on last slide or first slide so the carousel is a continuous loop
slider.addEventListener('transitionend', function () {
  if (counter === slides.length - 1) {
    //update counter turn off transition then go to slide.
    counter = 0;
    slider.style.transition = 'none';
    goToSlide();
  } else if (counter === 0) {
    //update counter turn off transition then go to slide.
    counter = slides.length - 1;
    slider.style.transition = 'none';
    goToSlide();
  }
});

// function to auto change slide used by interval every 5 secs
function autoChangeSlide() {
  //returns if on last slide to prevent firing
  if (counter === slides.length - 1) return;
  // reactivates transition
  slider.style.transition = 'ease-in-out 0.5s';
  //increment counter
  counter++;
  goToSlide();
}

// removes current-dot class from current dot then reapplies it on new dot
function updateCurrentDot() {
  if (counter === slides.length - 1) return;
  dots.forEach((dot) => {
    dot.classList.remove('current-dot');
  });
  dots[counter].classList.add('current-dot');
}

// event listener to navigate between slides using dots set on entire nav
dotsNav.addEventListener('click', function (e) {
  //sets clicked dot and finds the index
  const targetDot = e.target.closest('button');
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  //returns if no dot was clicked
  if (!targetDot) return;
  // sets counter to index of dot clicked
  counter = targetIndex;
  // remove transition effect
  slider.style.transition = '';
  goToSlide();
});
