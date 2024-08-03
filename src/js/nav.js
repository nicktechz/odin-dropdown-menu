function toggleDropdown() {
  // DOM MANIPULATION
  const dropdownServices = document.getElementById("dropdown");
  const dropdownLink = document.getElementById("servicesLink");
  const dropdownIcon = document.getElementById("servicesDropdownIcon");

  //   CURRENT STATE
  dropdownServices.style.visibility = "hidden";

  //   EVENT LISTENER
  dropdownLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (dropdownServices.style.visibility === "hidden") {
      dropdownServices.style.visibility = "visible";
      dropdownIcon.src = "./src/icons/chevron-up.svg";
    } else {
      dropdownServices.style.visibility = "hidden";
      dropdownIcon.src = "./src/icons/chevron-down.svg";
    }
  });
}

toggleDropdown();
