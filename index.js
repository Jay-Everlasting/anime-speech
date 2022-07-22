"use strict";

function handleClick() {
  var buttonIneerHRML = this.innerHTML;
  makeSound(buttonIneerHRML);

  buttonAnimation(buttonIneerHRML);
}

function makeSound(key) {
  switch (key) {
    case "j":
      var audio = new Audio("sounds/eren_jeager.mp3");
      audio.play();
      break;
    case "e":
      var audio = new Audio("sounds/erwin_smith_s.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/lawliet.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/Kokushibo_Voice.mp3");
      audio.play();
      break;
    case "c":
      var audio = new Audio("sounds/levi-pp.mp3");
      audio.play();
      break;
    case "m":
      var audio = new Audio("sounds/maikii.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/shinobu_kocho.mp3");
      audio.play();
      break;
    case "y":
      var audio = new Audio("sounds/yumeko-sama.mp3");
      audio.play();
      break;
    case "E":
      var audio = new Audio("sounds/erwin_smith_l.mp3");
      audio.play();
      break;
    case "S":
      var audio = new Audio("sounds/shinobu-double.mp3");
      audio.play();
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// DETECTING BUTTON PRESS
for (let i = 0; i < document.getElementsByClassName("drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

// DETECTING KEY PRESS
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
