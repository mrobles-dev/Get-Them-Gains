var weightStart = document.getElementById("myBar").dataset.startingweight;
console.log(weightStart)
var weightGoal = document.getElementById("myBar").dataset.weightgoal;
console.log(weightGoal)
var weightCurrent = document.getElementById("myBar").dataset.currentweight;
console.log(weightCurrent)
// Calculate progress percentage for weight loss
var weightProgressBar = document.getElementById("myBar");
if (weightStart === weightGoal) {
    weightProgressBar.style.width = "5%";
    weightProgressBar.innerHTML = "?" + "%";
} else if (Math.floor((weightStart - weightCurrent) / (weightStart - weightGoal) * 100) <= 0) {
    var weightProgressPercent = Math.floor((weightStart - weightCurrent) / (weightStart - weightGoal) * 100);
    console.log(weightProgressPercent)
    // Update weight loss progress bar

    weightProgressBar.style.width = "5%";
    weightProgressBar.innerHTML = weightProgressPercent + "%";
} else {
    var weightProgressPercent = Math.floor((weightStart - weightCurrent) / (weightStart - weightGoal) * 100);
    console.log(weightProgressPercent)
    // Update weight loss progress bar

    weightProgressBar.style.width = weightProgressPercent + "%";
    weightProgressBar.innerHTML = weightProgressPercent + "%";
}
