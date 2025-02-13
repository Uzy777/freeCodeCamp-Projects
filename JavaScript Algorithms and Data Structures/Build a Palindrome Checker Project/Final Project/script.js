const button = document.getElementById("check-btn");
const result = document.getElementById("result");
const input = document.getElementById("text-input");

function normalise(inputString) {
  return inputString.toLowerCase().replace(/[^a-z0-9]/g, "");
}

button.addEventListener("click", () => {
  const inputValue = input.value;
  if (!inputValue) {
    alert("Please input a value");
    return;
  }

  const normalisedInput = normalise(inputValue);
  const isPalindrome = normalisedInput === normalisedInput.split("").reverse().join("");

  result.textContent = isPalindrome ? `${inputValue} is a palindrome` : `${inputValue} is not a palindrome`;
});








//   if (inputValue === inputValue.split("").reverse().join("")) {
//     result.textContent = `${inputValue} is a palindrome`
//   } else if (!inputValue === inputValue.split("").reverse().join("")) {
//     result.textContent = `${inputValue} is not a palindrome`

//   }

//       alert("Please input a value");

// });



// ------------------------------------------------------------------------ //


// const palindrome = ["A", "eye", "_eye", "race car", "A man, a plan, a canal. Panama", "never odd or even", "My age is 0, 0 si ega ym.", "0_0 (: /- :) 0-0"];
// const notPalindrome = ["not a palindrome", "nope", "1 eye for of 1 eye.", "five|_/|four", "almostomla"];

// button.addEventListener("click", () => {
//   const inputValue = input.value;

//   if (palindrome.includes(inputValue)) {
//     result.textContent = `${inputValue} is a palindrome`;
//   }
//   if (notPalindrome.includes(inputValue)) {
//     result.textContent = `${inputValue} is not a palindrome`;
//   } else {
//     alert("Please input a value");
//   }
// });
