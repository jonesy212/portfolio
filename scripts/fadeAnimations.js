function checkAnimationVisibility() {
  var fadeSections = document.querySelectorAll(".fade-section");

  for (var i = 0; i < fadeSections.length; i++) {
    var fadeInPosition =
      fadeSections[i].getBoundingClientRect().top +
      fadeSections[i].offsetHeight * 0.3;
    var isVisible = window.innerHeight > fadeInPosition;

    if (isVisible) {
      fadeSections[i].classList.add("fade-in");
      applySlideInAnimation(fadeSections[i], 0.5, '.left');
      applySlideInAnimation(fadeSections[i], '.right');

    } else {
      fadeSections[i].classList.remove("fade-in");
      applySlideInAnimation(fadeSections[i], true); // For right-sliding elements
      applySlideInAnimation(fadeSections[i], true); // For left-sliding elements
    }
  }
}

function applyFadeInAnimation(element, delay) {
  let position =
    element.getBoundingClientRect().top + element.offsetHeight * 0.5;
  let isVisible = window.innerHeight > position;
  if (isVisible) {
    element.style.animationDelay = `${delay}s`;
    element.classList.add("fade-in");
    applySlideInAnimation(element);
  }
}

function applySlideInAnimation(element) {
  let leftVideoContainer = element.querySelector('.left');
  let rightVideoContainer = element.querySelector('.right');
  
  if (leftVideoContainer) {
    let leftPosition = leftVideoContainer.getBoundingClientRect().top + (leftVideoContainer.offsetHeight * 1.7);
    let isLeftVisible = window.innerHeight > leftPosition;

    // Calculate the delay based on the position
    let leftDelay = Math.max(0, (leftPosition - window.innerHeight) / 10); // Adjust the division value for desired delay speed

    if (isLeftVisible) {
      // leftVideoContainer.style.transitionDelay = `${leftDelay}s`;
      leftVideoContainer.classList.remove('slide-left');
      leftVideoContainer.classList.add('slide-right');
    } else {
      leftVideoContainer.style.transitionDelay = '0s';
      leftVideoContainer.classList.remove('slide-right');
      leftVideoContainer.classList.add('slide-left');
    }
  }

  if (rightVideoContainer) {
    let rightPosition = rightVideoContainer.getBoundingClientRect().top + (rightVideoContainer.offsetHeight * 1.4);
    let isRightVisible = window.innerHeight > rightPosition;

    // Calculate the delay based on the position
    let rightDelay = Math.max(0, (rightPosition - window.innerHeight) / 10); // Adjust the division value for desired delay speed

    if (isRightVisible) {
      // rightVideoContainer.style.transitionDelay = `${rightDelay}s`;
      rightVideoContainer.classList.remove('slide-right');
      rightVideoContainer.classList.add('slide-left');
    } else {
      rightVideoContainer.style.transitionDelay = '0s';
      rightVideoContainer.classList.remove('slide-left');
      rightVideoContainer.classList.add('slide-right');
    }
  }
}


window.addEventListener("scroll", checkAnimationVisibility);

let workExamples = document.querySelector(".example-heading");
applyFadeInAnimation(workExamples, 0.5);

let paragraph = document.querySelector(".video-paragraph");
applyFadeInAnimation(paragraph, 1.5);
