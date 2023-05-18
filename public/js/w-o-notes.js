const workoutHandler = async (event) =>{
    event.preventDefault();

const title = document.getElementById('note-title').value;
const text = document.getElementById('note-textarea').value

console.log(title, text);

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


document.querySelector(".save-note").addEventListener("click", workoutHandler);

