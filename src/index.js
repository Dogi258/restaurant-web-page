import "./style.css";
import initialPageLoad from "./initial-page-load.js";
import homePage from "./home-page.js";
import menuPage from "./menu-page.js";
import contactPage from "./contact-page.js";

initialPageLoad();
addClickListenersToTabButtons();

function addClickListenersToTabButtons() {
  // Get tab buttons
  const tabButtons = document.querySelectorAll(
    ".header .flex-container button"
  );

  tabButtons.forEach((tab) => {
    tab.addEventListener("click", changeTab);
  });
}

function changeTab(e) {
  //Remove contents of main
  const mainDiv = document.querySelector(".main");
  mainDiv.innerHTML = "";

  if (e.target.textContent == "Home") {
    mainDiv.appendChild(homePage());
  }

  if (e.target.textContent == "Menu") {
    mainDiv.appendChild(menuPage());
  }

  if (e.target.textContent == "Contact") {
    mainDiv.appendChild(contactPage());
  }
}
