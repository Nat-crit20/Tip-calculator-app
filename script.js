const reset = document.querySelector(".reset-btn");
const totalBill = document.querySelector(".final-total");
const payPerPerson = document.querySelector(".final-per-person");
const billInput = document.getElementById("bill");
const customTip = document.getElementById("custom-input");
const numPeople = document.getElementById("num-people");
const tipBtn = document.querySelectorAll(".tip-button");

///

let tip = 25;
let bill = 0;
let people = 1;

//Functions

const calcTip = function (bill, tipPercent, totalPeople) {
  let tipAmount = bill * (tipPercent / 100);
  let results = (bill + tipAmount) / totalPeople;
  console.log(results);
  return results;
};

//EvetntListiners
customTip.addEventListener("input", function (event) {
  event.preventDefault();
  let input = Number(event.target.value);
  if (isNaN(input)) {
    throw new Error("This is not a number");
  }
  tip = input;
  calcTip(bill, tip, people);
});

tipBtn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    tip = event.target.innerText.slice(0, -1);
    calcTip(bill, tip, people);
  });
});

billInput.addEventListener("input", function (event) {
  event.preventDefault();
  let input = Number(event.target.value);
  if (isNaN(input)) {
    throw new Error("This is not a number");
  }
  bill = input;
  calcTip(bill, tip, people);
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
  people = input;
  calcTip(bill, tip, people);
});
