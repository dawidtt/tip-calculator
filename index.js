const err = document.querySelector("#err");
const people = document.querySelector("#people");
const tipAmountResult = document.querySelector("#tip-amount-result");
const totalResult = document.querySelector("#total-result");
const pathToTips = document.querySelectorAll(".grid-container");
for (let i = 0; i < pathToTips.length - 1; i++) {
  pathToTips[i].addEventListener("click", clearCustom);
  pathToTips[i].addEventListener("click", tipCalculation);
}
const PathToInputs = document.querySelectorAll("input[type=text]");
for (let i = 0; i < PathToInputs.length; i++) {
  PathToInputs[i].addEventListener("input", tipCalculation);
}
function clearCustom() {
  const path = document.querySelector("#custom");
  path.value = "";
}
function clearSelect() {
  const path = document.querySelectorAll("input[type=radio]");
  for (let i = 0; i < path.length; i++) {
    path[i].checked = false;
  }
}

function tipCalculation() {
  const bill = document.querySelector("#bill").value;
  const numOfPeople = document.querySelector("#people").value;
  const customTipPath = document.querySelector("#custom");
  const tipProcentPath = document.getElementsByName("select");
  let tipProcent = 0;
  let tipAmount = 0;
  let total = 0;

  for (let i = 0; i < tipProcentPath.length; i++) {
    if (tipProcentPath[i].checked) {
      tipProcent = tipProcentPath[i].value;
    }
  }
  if (tipProcent == 0) {
    tipProcent = customTipPath.value;
    tipProcent = tipProcent / 100;
  } else {
    tipProcent = tipProcent.substring(0, tipProcent.length - 1);
    tipProcent = parseInt(tipProcent) / 100;
  }
  tipAmount = Math.round(((bill * tipProcent) / numOfPeople) * 100) / 100;
  total = Math.round((bill / numOfPeople + tipAmount) * 100) / 100;
  if (numOfPeople == "0") {
    people.classList.add("err-border");
    err.classList.add("err-msg");
    tipAmountResult.innerText = "$" + 0;
    totalResult.innerText = "$" + 0;
  } else if (tipAmount && total && numOfPeople) {
    tipAmountResult.innerText = "$" + tipAmount;
    totalResult.innerText = "$" + total;
    people.classList.remove("err-border");
    err.classList.remove("err-msg");
  } else if (tipAmount == 0 && total && numOfPeople) {
    tipAmountResult.innerText = "$" + tipAmount;
    totalResult.innerText = "$" + total;
    people.classList.remove("err-border");
    err.classList.remove("err-msg");
  } else {
    tipAmountResult.innerText = "$" + 0;
    totalResult.innerText = "$" + 0;
  }
}
function reset() {
  clearCustom();
  clearSelect();
  tipAmountResult.innerText = "$" + 0;
  totalResult.innerText = "$" + 0;
  document.querySelector("#bill").value = "";
  people.value = "";
  people.classList.remove("err-border");
  err.classList.remove("err-msg");
}
