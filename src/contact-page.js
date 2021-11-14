import mapSrc from "./images/map-image.PNG";

export default function createMenuPage() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const phoneNumber = document.createElement("div");
  phoneNumber.textContent = "📞 555-555-555";

  const address = document.createElement("div");
  address.textContent = "🏠 9601 1/2 Westheimer Rd, Houston, TX 77063";

  const map = new Image();
  map.src = mapSrc;

  contactContainer.append(phoneNumber, address, map);
  return contactContainer;
}
