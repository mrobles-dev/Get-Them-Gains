//! Lodash
//const lodash = require('lodash');
//Lodash is being imported via CDN on HTML page
//randomBackgroundImage() is being called when the page loads

const images = ['../assets/fitness1.jpg', '../assets/fitness2.jpg', '../assets/fitness3.jpg', '../assets/fitness4.jpg', '../assets/fitness5.jpg', '../assets/fitness6.jpg'];

function randomBackgroundImage() {
  var num = _.random(0, images.length - 1);
  document.body.style.backgroundImage = 'url("' + images[num] + '")';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
}
//! Lodash



//! See Credits for Progress Bar Inspiration
progress = 0;

const progressContainer = document.getElementById("hideProgress");

progressContainer.classList.remove("hidden");


function updateProgressBar() {
  if (progress < 100) {
    var elem = document.getElementById("myBar");
    progress += 20;
    elem.style.width = progress + "%";
    elem.innerHTML = progress + "%";
  }
};

updateProgressBar();
