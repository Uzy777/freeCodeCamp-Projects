// let price = 1.87;
let price = 19.5;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const cashElement = document.getElementById("cash");
const changeDueElement = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

let currencyUnits = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

purchaseBtn.addEventListener("click", () => {
  const cashValue = parseFloat(cashElement.value);
  const changeDue = cashValue - price;

  if (cashValue < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cashValue === price) {
    changeDueElement.innerText = "No change due - customer paid with exact cash";
    return;
  }

  const changeResult = getChange(changeDue, cid);

  if (changeResult.status === "INSUFFICIENT_FUNDS" || changeResult.status === "CLOSED") {
    changeDueElement.innerText = `Status: ${changeResult.status} ${formatChange(changeResult.change)}`;
  } else {
    let changeText = `Status: OPEN ${formatChange(changeResult.change)}`;
    changeDueElement.innerText = changeText;
  }
});

const getChange = (changeDueElement, cid) => {
  let totalCid = parseFloat(cid.reduce((sum, [_, amount]) => sum + amount, 0).toFixed(2)); // E.g. ['FIVE', 55] Skipping 'FIVE' WITH _
  if (totalCid < changeDueElement) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  let changeArray = [];
  let remainingChange = changeDueElement;

  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    let unit = currencyUnits[i][0];
    let unitValue = currencyUnits[i][1];
    let unitInDrawer = cid[i][1];

    if (unitValue <= remainingChange && unitInDrawer > 0) {
      let amountFromUnit = 0;

      while (remainingChange >= unitValue && unitInDrawer > 0) {
        remainingChange = (remainingChange - unitValue).toFixed(2);
        unitInDrawer -= unitValue;
        amountFromUnit += unitValue;
      }

      if (amountFromUnit > 0) {
        changeArray.push([unit, amountFromUnit]);
      }
    }
  } // end of for loop

  if (remainingChange > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeDueElement === 0.5 && totalCid === 0.5) {
    return { status: "CLOSED", change: [["PENNY", 0.5]] };
  }

  return { status: "OPEN", change: changeArray };
}; // end of getChange()

const formatChange = (changeArray) => changeArray.map(([unit, amount]) => `${unit}: $${amount.toFixed(2)}`).join(" ");

// console.log(formatChange(.5,cid));

//   console.log("test")
//   if (cashElement.value < price) {
//   alert("Customer does not have enough money to purchase the item")
// } else if (cashElement.value > price) {
//   changeDueElement.innerText = "Status: OPEN QUARTER: $0.5" // This must be dynamic with literal ``
// } else if (cashElement.value = price) {
//   changeDueElement.innerText = "No change due - customer paid with exact cash"
// }
// })

// cashElement.innerText = ""
