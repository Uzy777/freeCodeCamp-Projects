const userinput = document.getElementById("user-input");
const checkbtn = document.getElementById("check-btn");
const clearbtn = document.getElementById("clear-btn");
const resultsdiv = document.getElementById("results-div");

checkbtn.addEventListener("click", function () {
  if (userinput.value.trim() === "") {
    alert("Please provide a phone number");
  }
});

clearbtn.addEventListener("click", function () {
  console.log("test");
  resultsdiv.innerText = "test";
  console.log(resultsdiv.value);
});

// checkbtn.addEventListener("click", function () {
//   userinput.value.trim() === /[1-9]/;
//   resultsdiv.innerText = "Valid US number: 1 555-555-5555";
// });
