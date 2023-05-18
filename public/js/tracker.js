window.onload = function() {
  setTimeout(function() {
    var delayedImage = document.querySelector('.delayed-image');
    delayedImage.classList.add('fade-in');
  }, 300);
};

// Source: Beyond Fireship Youtube Video "Subtle, yet Beautiful Scroll Animations" link: https://www.youtube.com/watch?v=T33NN_pPeNI

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('showNav');
    } else {
      entry.target.classList.remove('showNav');
    }
  })
})

const hiddenElements = document.querySelectorAll('.hiddenNav');
hiddenElements.forEach((el) => observer.observe(el));
