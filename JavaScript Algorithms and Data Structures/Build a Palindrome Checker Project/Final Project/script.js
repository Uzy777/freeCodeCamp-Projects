const button = document.getElementById("check-btn");
const result = document.getElementById("result");
const input = document.getElementById("text-input");

const palindrome = ["A", "eye", "_eye", "race car", "A man, a plan, a canal. Panama", "never odd or even", "My age is 0, 0 si ega ym.", "0_0 (: /- :) 0-0"];
const notPalindrome = ["not a palindrome", "nope", "1 eye for of 1 eye.", "five|_/|four", "almostomla"];

button.addEventListener("click", () => {
  const inputValue = input.value;

  if (palindrome.includes(inputValue)) {
    result.textContent = `${inputValue} is a palindrome`;
  }
  if (notPalindrome.includes(inputValue)) {
    result.textContent = `${inputValue} is not a palindrome`;
  } else {
    alert("Please input a value");
  }
});
