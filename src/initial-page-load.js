import dogSrc from "./images/dog-chef.jpg";

export default function initialPageLoad() {
  // Get content div
  const mainContent = document.querySelector("#content");
  mainContent.appendChild(createHeaderDiv());
  mainContent.appendChild(createMainDiv());
  mainContent.appendChild(createFooterDiv());
  return mainContent;
}

function createHeaderDiv() {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const h1 = document.createElement("h1");
  h1.textContent = "Cool Burgers";

  headerDiv.appendChild(h1);
  return headerDiv;
}

function createFooterDiv() {
  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footer");
  footerDiv.textContent = "footer";

  return footerDiv;
}

function createMainDiv() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main");

  const flexContainer = document.createElement("div");
  flexContainer.classList.add("container");

  const bestBurgersText = document.createElement("p");
  bestBurgersText.textContent = "Best burgers in town!";

  const madeInText = document.createElement("p");
  madeInText.textContent = "Made with passion";

  const dogImage = new Image();
  dogImage.src = dogSrc;

  const orderOnlineText = document.createElement("p");
  orderOnlineText.textContent = "Order Online or visit Us!";

  flexContainer.appendChild(bestBurgersText);
  flexContainer.appendChild(madeInText);
  flexContainer.appendChild(dogImage);
  flexContainer.appendChild(orderOnlineText);

  mainDiv.appendChild(flexContainer);

  return mainDiv;
}
