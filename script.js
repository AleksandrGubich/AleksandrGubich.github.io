const locationsButton = document.querySelector(
  '.navDirection[data-section="locations"]'
);
const settingsButton = document.querySelector(
  '.navDirection[data-section="settings"]'
);

const mainBlockRightLocations = document.querySelector(
  ".mainBlock-right-locations"
);
const mainBlockRightSettings = document.querySelector(
  ".mainBlock-right-settings"
);

mainBlockRightLocations.style.display = "none";
mainBlockRightSettings.style.display = "none";

const hideAllBlocks = () => {
  mainBlockRightLocations.style.display = "none";
  mainBlockRightSettings.style.display = "none";
  locationsButton.classList.remove("active");
  settingsButton.classList.remove("active");
};

locationsButton.addEventListener("click", () => {
  if (mainBlockRightLocations.style.display === "none") {
    hideAllBlocks();
    mainBlockRightLocations.style.display = "block";
    locationsButton.classList.add("active");
  } else {
    mainBlockRightLocations.style.display = "none";
    locationsButton.classList.remove("active");
  }
});

settingsButton.addEventListener("click", () => {
  if (mainBlockRightSettings.style.display === "none") {
    hideAllBlocks();
    mainBlockRightSettings.style.display = "block";
    settingsButton.classList.add("active");
  } else {
    mainBlockRightSettings.style.display = "none";
    settingsButton.classList.remove("active");
  }
});
