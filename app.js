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

// source functions
const kick1 = document.getElementById("kick1");
const kick2 = document.getElementById("kick2");
const kick3 = document.getElementById("kick3");
const kick4 = document.getElementById("kick4");
const kick5 = document.getElementById("kick5");

const clap1 = document.getElementById("clap1");
const clap2 = document.getElementById("clap2");
const clap3 = document.getElementById("clap3");
const clap4 = document.getElementById("clap4");
const clap5 = document.getElementById("clap5");

const hat1 = document.getElementById("hat1");
const hat2 = document.getElementById("hat2");
const hat3 = document.getElementById("hat3");
const hat4 = document.getElementById("hat4");
const hat5 = document.getElementById("hat5");

let changeKick = 1;
let changeClap = 1;
let changeHat = 1;

kick1.addEventListener("click", () => (changeKick = 1));
kick2.addEventListener("click", () => (changeKick = 2));
kick3.addEventListener("click", () => (changeKick = 3));
kick4.addEventListener("click", () => (changeKick = 4));
kick5.addEventListener("click", () => (changeKick = 5));

clap1.addEventListener("click", () => (changeClap = 1));
clap2.addEventListener("click", () => (changeClap = 2));
clap3.addEventListener("click", () => (changeClap = 3));
clap4.addEventListener("click", () => (changeClap = 4));
clap5.addEventListener("click", () => (changeClap = 5));

hat1.addEventListener("click", () => (changeHat = 1));
hat2.addEventListener("click", () => (changeHat = 2));
hat3.addEventListener("click", () => (changeHat = 3));
hat4.addEventListener("click", () => (changeHat = 4));
hat5.addEventListener("click", () => (changeHat = 5));

const uploadKick = document.getElementById("uploadKick");
const uploadClap = document.getElementById("uploadClap");
const uploadHat = document.getElementById("uploadHat");

uploadKick.addEventListener("change", (e) => {
  let kick = e.target.files[0];
  console.log(kick);
});

function kickSound() {
  audioKick.src = `files/kick${changeKick}.wav`;
  audioKick.play();
}
function clapSound() {
  audioClap.src = `files/clap${changeClap}.wav`;
  audioClap.play();
}
function hatSound() {
  audioHat.src = `files/hat${changeHat}.wav`;
  audioHat.play();
}

// sound triggers when touch
kick.addEventListener("click", kickSound);
clap.addEventListener("click", clapSound);
hat.addEventListener("click", hatSound);

// to sound fns
function sound(e) {
  if (e.repeat) return;
  if (e.key == kickLetter.innerHTML.toLowerCase()) {
    kickSound();
    kick.style.backgroundColor = "rgb(22, 22, 22)";
  }
  if (e.key == clapLetter.innerHTML.toLowerCase()) {
    clapSound();
    clap.style.backgroundColor = "rgb(64, 64, 64)";
  }
  if (e.key == hatLetter.innerHTML.toLowerCase()) {
    hatSound();
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

// styles :p
const dw = document.querySelectorAll(".dropdown-content");
const ddAct = document.querySelectorAll("#ddAct");

dw[0].style.backgroundColor = "rgb(40, 40, 40)";
dw[1].style.backgroundColor = "rgb(78, 78, 78)";
dw[2].style.backgroundColor = "rgb(144, 144, 144)";

ddAct[0].style.backgroundColor = "rgb(40, 40, 40)";
ddAct[1].style.backgroundColor = "rgb(78, 78, 78)";
ddAct[2].style.backgroundColor = "rgb(144, 144, 144)";
