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
  tip = 0;
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

const errorMsg = function (inputType, id, msg) {
  inputType.setAttribute("id", "error-outline");
  const errorId = document.getElementById(id);
  errorId.innerText = msg;
};
const clearErrorMsg = function (inputType, id) {
  inputType.removeAttribute("id", "error-outline");
  const errorId = document.getElementById(id);
  errorId.innerText = "";
};

init();

//EvetntListiners
customTip.addEventListener("input", function (event) {
  event.preventDefault();
  let input = Number(event.target.value);
  if (isNaN(input)) {
    return;
  }
  tipBtn.forEach((btn) => {
    btn.removeAttribute("id", "active-btn");
  });
  tip = input;
  setTotal();
});

tipBtn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    tip = event.target.innerText.slice(0, -1);
    setTotal();
    tipBtn.forEach((btn) => {
      btn.removeAttribute("id", "active-btn");
    });
    btn.setAttribute("id", "active-btn");
  });
});

billInput.addEventListener("input", function (event) {
  event.preventDefault();
  let input = Number(event.target.value);
  if (isNaN(input)) {
    errorMsg(billInput, "bill-error-msg", "This is not a number");
    return;
  }
  clearErrorMsg(billInput, "bill-error-msg");
  bill = input;
  setTotal();
});

numPeople.addEventListener("input", function (event) {
  event.preventDefault();
  let input = Number(event.target.value);
  if (isNaN(input)) {
    errorMsg(numPeople, "people-error-msg", "This is not a number");
    return;
  }
  if (input === 0) {
    errorMsg(numPeople, "people-error-msg", "Can't be zero");
    return;
  }
  if (input < 0) {
    errorMsg(numPeople, "people-error-msg", "Must be greater than zero");
    return;
  }
  clearErrorMsg(numPeople, "people-error-msg");
  people = input;
  setTotal();
});

reset.addEventListener("click", function () {
  init();
  clearErrorMsg(billInput, "bill-error-msg");
  clearErrorMsg(numPeople, "people-error-msg");
  tipBtn.forEach((btn) => {
    btn.removeAttribute("id", "active-btn");
  });
});
