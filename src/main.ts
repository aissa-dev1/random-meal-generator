import meals from "./ts/data/meals";
import dom from "./ts/helpers/classes/Dom";
import Button from "./ts/types/elements/Button";
import Div from "./ts/types/elements/Div";

const mealOptionsSection = dom.select<Div>(".meal-options-section");
const mealSection = dom.select<Div>(".meal-section");
const getMealBtn = dom.select<Button>("#get_meal_btn");

getMealBtn.addEventListener("click", () => {
  getRandomMeal();
});

function getRandomMeal(): void {
  dom.classList(mealOptionsSection, "remove", "center");

  handleRandomMeal();
}

function handleRandomMeal(): void {
  const meal = meals[Math.floor(Math.random() * meals.length)];

  mealSection.textContent = "";

  const frontContainer = dom.create("div");

  const backContainer = dom.create("div");

  const mealTitle = dom.create("h3", meal.name);

  const mealDescription = dom.create("p", meal.description);

  const mealImage = dom.create("img");

  const mealPriceParagraph = dom.create("p", "Price: ");

  const mealPriceSpan = dom.create("span", `$${meal.price}`);

  dom.classList(frontContainer, "add", "front-container");
  dom.classList(backContainer, "add", "back-container");

  mealImage.src = `./data/${meal.image}`;

  mealPriceParagraph.appendChild(mealPriceSpan);

  frontContainer.append(mealImage, mealPriceParagraph);
  backContainer.append(mealTitle, mealDescription);

  mealSection.append(frontContainer, backContainer);
}
