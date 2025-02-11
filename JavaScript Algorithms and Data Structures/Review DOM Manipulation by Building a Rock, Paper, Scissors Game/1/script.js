function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const choice = Math.floor(Math.random() * options.length);
  return options[choice];
}