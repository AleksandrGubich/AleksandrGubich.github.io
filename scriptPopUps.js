const addButton = document.getElementById("add");
const popupAdd = document.getElementById("popupAdd");
const closePopUpButtonAdd = document.querySelector(".decline");

if (addButton && popupAdd && closePopUpButtonAdd) {
  addButton.addEventListener("click", () => {
    popupAdd.style.display = "flex";
  });

  closePopUpButtonAdd.addEventListener("click", () => {
    popupAdd.style.display = "none";
  });
}

const editButton = document.querySelector(".edit");
const popupChange = document.getElementById("popupChange");
const closePopUpButtonChange = document.querySelector(".toDecline");

if (editButton && popupChange && closePopUpButtonChange) {
  editButton.addEventListener("click", () => {
    popupChange.style.display = "flex";
  });

  closePopUpButtonChange.addEventListener("click", () => {
    popupChange.style.display = "none";
  });
}
