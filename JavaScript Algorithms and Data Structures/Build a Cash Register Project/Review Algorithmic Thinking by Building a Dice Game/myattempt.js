const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.getElementById("score-options").querySelectorAll("input");
const scoreSpans = document.getElementById("score-options").querySelectorAll("span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");

const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesBtn = document.getElementById("rules-btn");
const rulesContainer = document.querySelector(".rules-container");

let isModalShowing = false;
rulesBtn.addEventListener("click", () => {
  if (!isModalShowing) {
    isModalShowing = true;
    rulesBtn.innerText = "Hide rules";
    rulesContainer.style.display = "block";
  } else {
    isModalShowing = false;
    rulesBtn.innerText = "Show rules";
    rulesContainer.style.display = "none";
  }
});

let diceValuesArr = [];

rollDiceBtn.addEventListener("click", () => {
  diceValuesArr = [];
  for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(roll);
    console.log(diceValuesArr);
    listOfAllDice[i].textContent = diceValuesArr[i];
  }
});

function updateStats() {
  rollsElement.textContent = rolls;
  roundElement.textContent = round;
}

rollDiceBtn.addEventListener("click", () => {
  if (rolls < 3) {
    rolls += 1;
    console.log(rolls);
    rollDice();
    updateStats();
  } else {
    alert("You must select a score");
  }
});

let rolls = 0;
let score = 0;
let round = 1;
