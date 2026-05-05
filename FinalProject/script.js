let page = document.getElementById("page");

let tentButton = document.getElementById("tentButton");
let fireButton = document.getElementById("fireButton");
let upButton = document.getElementById("upButton");
let rightButton = document.getElementById("rightButton");

let tent = document.getElementById("tent");
let fire = document.getElementById("fire");
let fireLitImage = document.getElementById("fireLit");
let up = document.getElementById("up");
let right = document.getElementById("right");

let popup = document.getElementById("popup");
let popupText = document.getElementById("popupText");
let closePopup = document.getElementById("closePopup");

let stickButton = document.getElementById("stickButton");
let downButton = document.getElementById("downButton");
let stick = document.getElementById("stick");
let down = document.getElementById("down");

if (fireLitImage && localStorage.getItem("fireLit") == "true") {
  fireLitImage.classList.remove("hidden");
}

function showMessage(message) {
  popupText.textContent = message;
  popup.classList.remove("hidden");
}

if (closePopup) {
  closePopup.onclick = function () {
    popup.classList.add("hidden");
  };
}
if (tentButton) {
  tentButton.onmouseover = function () {
    tent.classList.add("glow");
  };

  tentButton.onmouseout = function () {
    tent.classList.remove("glow");
  };

  tentButton.onclick = function () {
    showMessage("You are too hungry to sleep. Maybe you should find something to eat first.");
  };
}

if (fireButton) {
  fireButton.onmouseover = function () {
    fire.classList.add("glow");

    if (fireLitImage && localStorage.getItem("fireLit") == "true") {
      fireLitImage.classList.add("glow");
    }
  };

  fireButton.onmouseout = function () {
    fire.classList.remove("glow");

    if (fireLitImage) {
      fireLitImage.classList.remove("glow");
    }
  };

  fireButton.onclick = function () {
    let hasWood = localStorage.getItem("woodFound");
    let hasFish = localStorage.getItem("fishFound");
    let fireIsLit = localStorage.getItem("fireLit");

    if (hasWood == "true" && fireIsLit != "true") {
      localStorage.setItem("fireLit", "true");
      fireLitImage.classList.remove("hidden");
      showMessage("You place the gathered wood in the firepit and light the campfire. Maybe you could cook something here.");
    } else if (hasWood == "true" && hasFish == "true") {
      fireLitImage.classList.remove("hidden");
      showMessage("You cook the fish over the campfire.");
    } else if (hasWood == "true") {
      fireLitImage.classList.remove("hidden");
      showMessage("Maybe you could go catch some fish for food.");
    } else if (hasFish == "true") {
      showMessage("You have a fish, but you can't cook it without the fire.");
    } else {
      showMessage("The firepit is empty. You can find some wood from the forest.");
    }
  };
}

if (upButton) {
  upButton.onmouseover = function () {
    up.classList.add("glow");
  };

  upButton.onmouseout = function () {
    up.classList.remove("glow");
  };
}

if (rightButton) {
  rightButton.onmouseover = function () {
    right.classList.add("glow");
  };

  rightButton.onmouseout = function () {
    right.classList.remove("glow");
  };
}

if (stickButton) {
  if (localStorage.getItem("woodFound") == "true") {
    stick.classList.add("hidden");
    stickButton.classList.add("hidden");
  }

  stickButton.onmouseover = function () {
    stick.classList.add("glow");
  };

  stickButton.onmouseout = function () {
    stick.classList.remove("glow");
  };

  stickButton.onclick = function () {
    localStorage.setItem("woodFound", "true");

    stick.classList.add("hidden");
    stickButton.classList.add("hidden");

    showMessage("You picked up some dry wood.");
  };
}

if (downButton) {
  downButton.onmouseover = function () {
    down.classList.add("glow");
  };

  downButton.onmouseout = function () {
    down.classList.remove("glow");
  };
}


let fishButton = document.getElementById("fishButton");

if (fishButton) {
  fishButton.onclick = function () {
    localStorage.setItem("fishFound", "true");
    showMessage("You caught a fish.");
  };
}