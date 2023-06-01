const SKY = {
"0": "#0b1630",
"1": "#0b1630",
"2": "#0b1630",
"3": "#0b1630",
"4": "#0b1630",
"5": "#14244a",
"6": "#546da1",
"7": "#d1a084",
"8": "#def2ff",
"9": "#def2ff",
"10": "#edf8ff",
"11": "#edf8ff",
"12": "#f5f9ff",
"13": "#ebf7ff",
"14": "#ebf7ff",
"15": "#d9edfa",
"16": "#d9eafc",
"17": "#dae7f7",
"18": "#d9defc",
"19": "#ffb347",
"20": "#8160a3",
"21": "#35518f",
"22": "#15274f",
"23": "#0b1630"
};

const MAX_SPEED = 802;
const SPEED_MULTIPLIER = 8;

function changeSpeed() {
  const speed = document.getElementById("speed-input").value;
  const content = document.getElementById("marquee-content");
  content.style.animation = "marquee " + (MAX_SPEED - parseInt(speed)*SPEED_MULTIPLIER) + "s linear infinite";
  document.getElementById("speed-indicator").innerText = speed;
  if (speed === "0") {
    content.style.animationPlayState = 'paused';
  } else {
    content.style.animationPlayState = 'running';
  }
}

function changeTime() {
  console.log("hello i hope u have a great day :) fancy meeting u here!");
  const time = document.getElementById("time-input").value;
  document.getElementById("time-indicator").innerText = time + ":00";
  changeSky(time);
}

function changeSky(time) {
  document.body.style.backgroundColor = SKY[time];
  if (time > 5 && time < 20) {
    document.body.style.color = "#000000";
  } else {
    document.body.style.color = "#ffffff";
  }
}

function toggleSettings() {
  const settings = document.getElementById("settings-button");

  if (settings.innerText === "hide settings") {
    settings.innerText = "settings";
    document.getElementById("controls").style.display = "none";
  } else {
    settings.innerText = "hide settings";
    document.getElementById("controls").style.display = "block";
  }
}

window.onload = function() {
  const speed = document.getElementById("speed-input");
  speed.addEventListener("input", changeSpeed);
  const time = document.getElementById("time-input");
  time.addEventListener("input", changeTime);
  const settings = document.getElementById("settings-button");
  settings.addEventListener("click", toggleSettings);
}