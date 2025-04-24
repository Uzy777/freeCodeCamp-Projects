// let price = 1.87;
let price = 20;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const cashElement = document.getElementById("cash");
const changeDueElement = document.getElementById("change-due");

const purchaseBtn = document.getElementById("purchase-btn");

purchaseBtn.addEventListener("click", function () {
  console.log("test")
  if (cashElement.value < price) {
  alert("Customer does not have enough money to purchase the item")
} else if (cashElement.value > price) {
  changeDueElement.innerText = "Status: OPEN QUARTER: $0.5" // This must be dynamic with literal ``
} else if (cashElement.value = price) {
  changeDueElement.innerText = "No change due - customer paid with exact cash"
} 
})




cashElement.innerText = ""
