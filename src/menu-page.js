import baconSrc from "./images/bacon-cheese-burger.jpg";
import bbqSrc from "./images/bbq-burger.jpg";
import classicSrc from "./images/classic-burger.jpg";
import doubleSrc from "./images/double-cheese-burger.jpg";
import ranchSrc from "./images/ranch-burger.jpg";
import veggieSrc from "./images/veggie-burger.jpg";

export default function createMenuPage() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const baconBurger = createMenuItem(
    "Bacon Burger",
    "Burger with bacon and cheese",
    baconSrc
  );

  const BBQBurger = createMenuItem(
    "BBQ Burger",
    "Burger with barbeque sauce",
    bbqSrc
  );

  const classicBurger = createMenuItem(
    "Classic Burger",
    "Classic burger with tomatoes, and lettuce",
    classicSrc
  );

  const doubleCheeseBurger = createMenuItem(
    "Double Cheese Burger",
    "Burger with two patties and two cheese slices",
    doubleSrc
  );

  const ranchBurger = createMenuItem(
    "RanchBurger",
    "Burger with ranch",
    ranchSrc
  );

  const veggieBurger = createMenuItem(
    "Veggie Burger",
    "Burger with black bean patty, cheese, and veggies",
    veggieSrc
  );

  menuContainer.append(
    baconBurger,
    BBQBurger,
    classicBurger,
    doubleCheeseBurger,
    ranchBurger,
    veggieBurger
  );

  return menuContainer;
}

function createMenuItem(title, description, imgSrc) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const image = new Image();
  image.src = imgSrc;

  const p = document.createElement("p");
  p.textContent = description;

  menuItem.append(h2, image, p);

  return menuItem;
}
