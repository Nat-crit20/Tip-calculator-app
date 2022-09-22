const reset = document.querySelector(".reset-btn");
const totalBill = document.querySelector(".final-total");
const payPerPerson = document.querySelector(".final-per-person");
const billInput = document.getElementById("bill");
const customTip = document.getElementById("custom-input");
const numPeople = document.getElementById("num-people");
const tipBtn = document.querySelectorAll(".tip-button");

/// initial values

let tip;
let bill;
let people;
let tipAmount;
let finalTotal;

//Functions
const init = function () {
  tip = 25;
  bill = 0;
  people = 1;
  tipAmount = 0;
  finalTotal = 0;
  billInput.value = "";
  numPeople.value = "";
  setTotal();
};

const calcTip = function (bill, tipPercent, totalPeople) {
  tipAmount = bill * (tipPercent / 100);
  finalTotal = (bill + tipAmount) / totalPeople;
  return;
};

const setTotal = function () {
  calcTip(bill, tip, people);
  totalBill.innerText = `$` + tipAmount.toFixed(2);
  payPerPerson.innerText = `$` + finalTotal.toFixed(2);
};

init();
//EvetntListiners
customTip.addEventListener("input", function (event) {
  event.preventDefault();
  let input = Number(event.target.value);
  if (isNaN(input)) {
    throw new Error("This is not a number");
  }
  tip = input;
  setTotal();
});

tipBtn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    tip = event.target.innerText.slice(0, -1);
    setTotal();
  });
});

billInput.addEventListener("input", function (event) {
  event.preventDefault();
  let input = Number(event.target.value);
  if (isNaN(input)) {
    throw new Error("This is not a number");
  }
  bill = input;
  setTotal();
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
  setTotal();
});

reset.addEventListener("click", function () {
  init();
});
