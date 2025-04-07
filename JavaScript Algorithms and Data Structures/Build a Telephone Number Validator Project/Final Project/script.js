const userinput = document.getElementById("user-input");
const checkbtn = document.getElementById("check-btn");
const clearbtn = document.getElementById("clear-btn");
const resultsdiv = document.getElementById("results-div");

checkbtn.addEventListener("click", function () {
  if (userinput.value.trim() === "") {
    alert("Please provide a phone number");
  }
  const regex = /^(\d{10}|1?[\s-]?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4})$/;
  if (regex.test(userinput.value.trim())) {
    resultsdiv.innerText = `Valid US number: ${userinput.value}`;
    resultsdiv.style.color = "green";
  } else {
    resultsdiv.innerText = `Invalid US number: ${userinput.value}`;
    resultsdiv.style.color = "red";
  }
});

clearbtn.addEventListener("click", function () {
  resultsdiv.innerText = "";
});
