const body = document.body;

const tentObject = document.querySelector("#tentObject");
const backpackObject = document.querySelector("#backpackObject");
const droppedMap = document.querySelector("#droppedMap");

const mapPopup = document.querySelector("#mapPopup");
const closeMap = document.querySelector("#closeMap");

let tentBuilt = false;
let isNight = false;

// Backpack drops the map
if (backpackObject && droppedMap) {
  backpackObject.addEventListener("click", function () {
    droppedMap.classList.remove("hidden");
  });
}

// Clicking map opens map popup
if (droppedMap && mapPopup) {
  droppedMap.addEventListener("click", function () {
    mapPopup.classList.remove("hidden");
  });
}

// Close map popup with X button
if (closeMap && mapPopup) {
  closeMap.addEventListener("click", function () {
    mapPopup.classList.add("hidden");
  });
}

// Close map popup by clicking outside the popup box
if (mapPopup) {
  mapPopup.addEventListener("click", function (event) {
    if (event.target === mapPopup) {
      mapPopup.classList.add("hidden");
    }
  });
}

// Tent bag becomes tent, then tent changes day/night
if (tentObject) {
  tentObject.addEventListener("click", function () {
    if (tentBuilt === false) {
      tentBuilt = true;

      tentObject.textContent = "Tent";
      tentObject.classList.remove("tent-bag");
      tentObject.classList.add("tent-built");
    } else {
      isNight = !isNight;

      if (isNight) {
        body.classList.remove("day-mode");
        body.classList.add("night-mode");
      } else {
        body.classList.remove("night-mode");
        body.classList.add("day-mode");
      }
    }
  });
}