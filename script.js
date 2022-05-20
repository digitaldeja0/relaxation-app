const container = document.querySelector(".container");
const circleText = document.querySelector(".circleText");
const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  circleText.innerHTML = "Breath In...";
  container.className = "container grow";
  setTimeout(() => {
    circleText.innerHTML = "...Hold";
    setTimeout(() => {
      circleText.innerHTML = "Breath Out...";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);
