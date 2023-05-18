const workoutHandler = async (event) =>{
    event.preventDefault();

const title = document.querySelector('#note-title').value.trim();
const text = document.querySelector('#note-textarea').value.trim();

if (title && text) {
    try{
    const response = await fetch("/api/workouts", {
        method: 'POST',
        body: JSON.stringify({title, text}),
        headers: {"Content-Type" : "application/json"},
    });
if (response.ok){
    console.log("you got it dude!");
} else {
    const err = await response.json();
    console.error(err)
}
} catch (error) {
    console.error('erorr', error)
}

}
};


document.querySelector(".save-note").addEventListener("submit", workoutHandler);



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