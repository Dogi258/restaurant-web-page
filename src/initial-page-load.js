import homePage from "./home-page.js";

export default function initialPageLoad() {
  const mainContent = document.querySelector("#content");

  mainContent.appendChild(createHeaderDiv());
  mainContent.appendChild(createMainDiv());
  mainContent.appendChild(createFooterDiv());
}

function createHeaderDiv() {
  // Create heading div
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  // Create heading Title
  const h1 = document.createElement("h1");
  h1.textContent = "Cool Burgers";
  headerDiv.appendChild(h1);

  // Make flex container for button tabs
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex-container");

  // Make button tabs
  const homeTab = document.createElement("button");
  homeTab.textContent = "Home";
  const menuTab = document.createElement("button");
  menuTab.textContent = "Menu";
  const contactTab = document.createElement("button");
  contactTab.textContent = "Contact";

  flexContainer.append(homeTab, menuTab, contactTab);
  headerDiv.appendChild(flexContainer);

  return headerDiv;
}

function createFooterDiv() {
  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footer");
  footerDiv.textContent = "Copyright © 2021 Daniel Martinez";

  return footerDiv;
}

function createMainDiv() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main");

  // Make the default the home page
  mainDiv.appendChild(homePage());

  return mainDiv;
}
