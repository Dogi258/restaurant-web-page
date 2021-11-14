import dogSrc from "./images/dog-chef.jpg";

export default function createHomePage() {
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("home-container");

  const bestBurgersText = document.createElement("p");
  bestBurgersText.textContent = "Best burgers in town!";

  const madeInText = document.createElement("p");
  madeInText.textContent = "Made with passion";

  const dogImage = new Image();
  dogImage.src = dogSrc;

  const orderOnlineText = document.createElement("p");
  orderOnlineText.textContent = "Order Online or visit Us!";

  flexContainer.append(bestBurgersText, madeInText, dogImage, orderOnlineText);

  return flexContainer;
}
