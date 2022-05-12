const container = document.getElementById("container");
const kick = document.getElementById("kick");
const clap = document.getElementById("clap");
const hat = document.getElementById("hat");

const kickLetter = document.getElementById("kickLetter");
const clapLetter = document.getElementById("clapLetter");
const hatLetter = document.getElementById("hatLetter");

const audioKick = document.getElementById("audioKick");
const audioClap = document.getElementById("audioClap");
const audioHat = document.getElementById("audioHat");

document.addEventListener("keydown", sound);
document.addEventListener("keyup", noSound);

// kick letter set
kick.addEventListener("mouseover", () => {
  document.addEventListener("keydown", kickKeydown);
});
kick.addEventListener("mouseleave", () => {
  document.removeEventListener("keydown", kickKeydown);
});
function kickKeydown(e) {
  kickLetter.innerHTML = `${e.key.toUpperCase()}`;
}

// clap letter set
clap.addEventListener("mouseover", () => {
  document.addEventListener("keydown", clapKeydown);
});
clap.addEventListener("mouseleave", () => {
  document.removeEventListener("keydown", clapKeydown);
});
function clapKeydown(e) {
  clapLetter.innerHTML = `${e.key.toUpperCase()}`;
}

// hat letter set
hat.addEventListener("mouseover", () => {
  document.addEventListener("keydown", hatKeydown);
});
hat.addEventListener("mouseleave", () => {
  document.removeEventListener("keydown", hatKeydown);
});
function hatKeydown(e) {
  hatLetter.innerHTML = `${e.key.toUpperCase()}`;
}

// sound functions
function sound(e) {
  if (e.repeat) return;
  if (e.key == kickLetter.innerHTML.toLowerCase()) {
    kickFn();
    kick.style.backgroundColor = "rgb(22, 22, 22)";
  }
  if (e.key == clapLetter.innerHTML.toLowerCase()) {
    clapFn();
    clap.style.backgroundColor = "rgb(64, 64, 64)";
  }
  if (e.key == hatLetter.innerHTML.toLowerCase()) {
    hatFn();
    hat.style.backgroundColor = "rgb(130, 130, 130)";
  }
}

function noSound(e) {
  if (e.key == kickLetter.innerHTML.toLowerCase()) {
    kick.style.backgroundColor = "rgb(40, 40, 40)";
  }
  if (e.key == clapLetter.innerHTML.toLowerCase()) {
    clap.style.backgroundColor = "rgb(78, 78, 78)";
  }
  if (e.key == hatLetter.innerHTML.toLowerCase()) {
    hat.style.backgroundColor = "rgb(144, 144, 144)";
  }
}

function kickFn() {
  audioKick.src = "audios/kick4.wav";
  audioKick.play();
}
function clapFn() {
  audioKick.src = "audios/clap5.wav";
  audioKick.play();
}
function hatFn() {
  audioKick.src = "audios/hat3.wav";
  audioKick.play();
}
