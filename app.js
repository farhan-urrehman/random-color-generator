const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "blue",
  "lightblue",
  "white",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0 - 3 to get values from colors array//
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber]; //----> picking random index from colors array
  color.textContent = colors[randomNumber];
});


// getting random numbers function
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
