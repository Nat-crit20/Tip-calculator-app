const reset = document.querySelector(".reset-btn");
const totalBill = document.querySelector(".final-total");
const payPerPerson = document.querySelector(".final-per-person");
const billInput = document.getElementById("bill");
const customTip = document.getElementById("custom-input");
const numPeople = document.getElementById("num-people");

//Functions

//EvetntListiners

billInput.addEventListener("input", function (event) {
  event.preventDefault();
  let input = Number(event.target.value);
  if (isNaN(input)) {
    throw new Error("This is not a number");
  }
  console.log(input);
});

numPeople.addEventListener("input", function (event) {
  event.preventDefault();
  let input = Number(event.target.value);
  if (isNaN(input)) {
    throw new Error("This is not a number");
  }
  if (input === 0) {
    throw new Error("Can't be zero");
  }
  if (input < 0) {
    throw new Error("Must be greater than zero");
  }
  console.log(input);
});
