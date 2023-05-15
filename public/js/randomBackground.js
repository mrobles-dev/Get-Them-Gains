//! Lodash
//const lodash = require('lodash');
//Lodash is being imported via CDN on HTML page
//randomBackgroundImage() is being called when the page loads

const images = [
  '../assets/fit1.jpg',
  '../assets/fit2.jpg',
  '../assets/fit3.jpg',
  '../assets/fit4.jpg',
  '../assets/fit5.jpg'
];

function randomBackgroundImage() {
  var num = _.random(0, images.length - 1);
  document.body.style.backgroundImage = 'url("' + images[num] + '")';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
}
randomBackgroundImage();

//! Lodash

//! See Credits for Progress Bar Inspiration
//Progress Bar Javascript
// progress = 0;

// const progressContainer = document.getElementById("hideProgress");

// progressContainer.classList.remove("hidden");


// function updateProgressBar() {
//   if (progress < 100) {
//     var elem = document.getElementById("myBar");
//     progress += 20;
//     elem.style.width = progress + "%";
//     elem.innerHTML = progress + "%";
//   }
// };

// updateProgressBar();


//! Source for favicon https://spemer.com/articles/set-favicon-with-javascript.html 
//FavIcon Javascript

function setFavicons(favImg) {
  let headTitle = document.querySelector('head');
  let setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel', 'shortcut icon');
  setFavicon.setAttribute('href', favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons('../assets/favicon.ico');
