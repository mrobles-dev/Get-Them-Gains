var weightStart = document.getElementById("myBar").dataset.startingweight;
console.log(weightStart)
var weightGoal = "";
var weightCurrent = "";
// Calculate progress percentage for weight loss
var weightProgressPercent = Math.min(100, Math.floor((weightStart - weightCurrent) / (weightStart - weightGoal) * 100));
// Update weight loss progress bar
var weightProgressBar = document.getElementById("weightProgress");
weightProgressBar.style.width = weightProgressPercent + "%";
weightProgressBar.innerHTML = weightProgressPercent + "%";