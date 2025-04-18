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
  } else {
    isModalShowing = false;
  }
});

let diceValuesArr = [];

rollDiceBtn.addEventListener("click", () => {
  let roll = Math.floor(Math.random() * 6) + 1;
  diceValuesArr.push(roll);
  console.log(diceValuesArr);
});

let rolls = 0;
let score = 0;
let round = 1;
