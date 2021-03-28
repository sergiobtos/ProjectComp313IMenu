//DOM variables.

//Header
var headerGreeting = document.getElementById("headerGreeting");
var burgerBtn = document.getElementById("burgerBtn");
var pizzaBtn = document.getElementById("pizzaBtn");
var hotDogBtn = document.getElementById("hotDogBtn");
var drinksBtn = document.getElementById("drinksBtn");
var searchTbx = document.getElementById("searchTbx");

//Hide searchbox
searchTbx.style.display = "none";
//CARD body
var cardTitle1 = document.getElementById("card-title1");
var cardTitle2 = document.getElementById("card-title2");
var cardSubtitle1 = document.getElementById("card-subtitle1");
var cardSubtitle2 = document.getElementById("card-subtitle2");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");

//Hide card
card1.style.display = "none";
card2.style.display = "none";

//Order button
var orderBtn1 = document.getElementById("orderBtn1");
var orderBtn2 = document.getElementById("orderBtn2");

//Cart
var cartCount = document.getElementById("my-float");
var counter = 0;

//Time of day method.
var setGreeting = () => {
  let message;
  let time = new Date().getHours();
  if (time <= 11) {
    message = "GOOD MORNING";
  } else if (time === 12) {
    message = "GOOD AFTERNOON";
  } else if (time <= 23) {
    message = "GOOD EVENING";
  } else {
    message = "GOOD DAY";
  }
  return message;
};

headerGreeting.innerText = setGreeting();

//Event for when burger button is click.
burgerBtn.addEventListener("click", () => {
  display();
  cardTitle1.innerText = "Burger 1";
  cardTitle2.innerText = "Burger 2";
  cardSubtitle1.innerText = "350g | $28.99";
  cardSubtitle2.innerText = "350g | $28.99";
});

//Event for when pizza button is click.
pizzaBtn.addEventListener("click", () => {
  display();
  cardTitle1.innerText = "Pizza 1";
  cardTitle2.innerText = "Pizza 2";
  cardSubtitle1.innerText = "350g | $28.99";
  cardSubtitle2.innerText = "350g | $28.99";
});

//Event for when hot dog button is click.
hotDogBtn.addEventListener("click", () => {
  display();
  cardTitle1.innerText = "Hot Dog 1";
  cardTitle2.innerText = "Hot Dog 2";
  cardSubtitle1.innerText = "350g | $28.99";
  cardSubtitle2.innerText = "350g | $28.99";
});

//Event for when drinks button is click.
drinksBtn.addEventListener("click", () => {
  display();
  cardTitle1.innerText = "Drinks 1";
  cardTitle2.innerText = "Drinks 2";
  cardSubtitle1.innerText = "350g | $28.99";
  cardSubtitle2.innerText = "350g | $28.99";
});

//Event for when user use search box.
searchTbx.addEventListener("input", () => {});

//Order btn functions
orderBtn1.addEventListener("click", () => {
  counter++;
  cartCount.innerText = "" + counter;
  // Store it in the local storage
  localStorage.setItem("itemCount", counter);
});
orderBtn2.addEventListener("click", () => {
  counter++;
  cartCount.innerText = "" + counter;
  // Store it in the local storage
  localStorage.setItem("itemCount", counter);
});

//Display card function
function display() {
  if (
    card1.style.display === "none" &&
    card2.style.display === "none" &&
    searchTbx.style.display === "none"
  ) {
    card1.style.display = "block";
    card2.style.display = "block";
    searchTbx.style.display = "block";
  }
}
