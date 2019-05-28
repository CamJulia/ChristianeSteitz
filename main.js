const slideIndex = [];

// grab all galleries of the page
const galleries = document.getElementsByClassName("slider");

// set all gallery images to the first one
for (let slideCounter = 0; slideCounter < galleries.length; slideCounter++) {
  slideIndex.push(1);
}

// run once on load, initializing galleries
function initGalleries() {

  for (let slideCounter = 0; slideCounter < galleries.length; slideCounter++) {
    let gallery = document.querySelector("#div" + slideCounter);

    // get the prev and next slide button elements of this gallery
    let nextSlide = gallery.querySelector(".next");
    let prevSlide = gallery.querySelector(".prev");

    nextSlide.addEventListener('click', (event) => {
      const grandMotherElId = event.target.parentElement.parentElement.id;
      const position = grandMotherElId.substring(3, grandMotherElId.length);

      slideIndex[position] += 1;
      showSlides(slideIndex[position], grandMotherElId);
    });

    prevSlide.addEventListener('click', (event) => {
      const grandMotherElId = event.target.parentElement.parentElement.id;
      const position = grandMotherElId.substring(3, grandMotherElId.length);

      slideIndex[position] -= 1;
      showSlides(slideIndex[position], grandMotherElId);
    });
  }
  showSlides();
}

// runs once in the beginning and everytime the prev or next button is pressed in a gallery
function showSlides(n, interactedGalleryId) {
  for (let slideCounter = 0; slideCounter < galleries.length; slideCounter++) {
    // current gallery id, for example "div1"
    const currentGalleryId = "div"+ slideCounter;

    // the current gallery within the loop
    let gallery = document.querySelector("#div" + slideCounter);

    // all the slides in this gallery
    let slides = gallery.querySelectorAll(".mySlides");

    // get the thumbnails of this gallery
    let thumbs = gallery.querySelectorAll(".demo");

    // only apply this rule when it's the currently interacted gallery
    // as in: I've pressed prev or next on this gallery
    if (interactedGalleryId === currentGalleryId && n > slides.length) {
      slideIndex[slideCounter] = 1
    }

    // only apply this rule when it's the currently interacted gallery
    // as in: I've pressed prev or next on this gallery
    if (interactedGalleryId === currentGalleryId && n < 1) {
      slideIndex[slideCounter] = slides.length
    }

    // set all slides to display 'none'
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // set all thumbs from " active" to ""
    for (let i = 0; i < thumbs.length; i++) {
      thumbs[i].className = thumbs[i].className.replace(" active", "");
    }

    // grab the correct slide and set it to "block"
    slides[slideIndex[slideCounter] - 1].style.display = "block";
    // grab the correct thumb and set it to " active"
    thumbs[slideIndex[slideCounter] - 1].className += " active";
  }
};

initGalleries();