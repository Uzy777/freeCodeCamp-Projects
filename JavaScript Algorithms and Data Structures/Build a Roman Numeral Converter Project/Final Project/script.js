const button = document.getElementById("convert-btn");
const verdict = document.getElementById("output");

const numeral = [
  {
    rnumeral: "M",
    anumeral: 1000,
  },
  {
    rnumeral: "CM",
    anumeral: 900,
  },
  {
    rnumeral: "D",
    anumeral: 500,
  },
  {
    rnumeral: "CD",
    anumeral: 400,
  },
  {
    rnumeral: "C",
    anumeral: 100,
  },
  {
    rnumeral: "XC",
    anumeral: 90,
  },
  {
    rnumeral: "L",
    anumeral: 50,
  },
  {
    rnumeral: "XL",
    anumeral: 40,
  },
  {
    rnumeral: "X",
    anumeral: 10,
  },
  {
    rnumeral: "IX",
    anumeral: 9,
  },
  {
    rnumeral: "V",
    anumeral: 5,
  },
  {
    rnumeral: "IV",
    anumeral: 4,
  },
  {
    rnumeral: "I",
    anumeral: 1,
  },
];

function rnumeralType(e) {
  return numeral[e].rnumeral;
}

function anumeralType(e) {
  return numeral[e].anumeral;
}

button.addEventListener("click", convertInput);

function convertInput() {
  let input = document.getElementById("number").value;

  while (input !== 0) {
    // Arabic Numeral - 1000
    if (input >= anumeralType(0)) {
      input -= anumeralType(0);
      verdict.innerText += `${rnumeralType(0)}`; // Roman Numeral - M
      // Arabic Numeral - 900
    } else if (input >= anumeralType(1)) {
      input -= anumeralType(1);
      verdict.innerText += `${rnumeralType(1)}`; // Roman Numeral - CM
      // Arabic Numeral - 500
    } else if (input >= anumeralType(2)) {
      input -= anumeralType(2);
      verdict.innerText += `${rnumeralType(2)}`; // Roman Numeral - D
      // Arabic Numeral - 400
    } else if (input >= anumeralType(3)) {
      input -= anumeralType(3);
      verdict.innerText += `${rnumeralType(3)}`; // Roman Numeral - CD
      // Arabic Numeral - 100
    } else if (input >= anumeralType(4)) {
      input -= anumeralType(4);
      verdict.innerText += `${rnumeralType(4)}`; // Roman Numeral - C
      // Arabic Numeral - 90
    } else if (input >= anumeralType(5)) {
      input -= anumeralType(5);
      verdict.innerText += `${rnumeralType(5)}`; // Roman Numeral - XC
      // Arabic Numeral - 50
    } else if (input >= anumeralType(6)) {
      input -= anumeralType(6);
      verdict.innerText += `${rnumeralType(6)}`; // Roman Numeral - L
      // Arabic Numeral - 40
    } else if (input >= anumeralType(7)) {
      input -= anumeralType(7);
      verdict.innerText += `${rnumeralType(7)}`; // Roman Numeral - XL
      // Arabic Numeral - 10
    } else if (input >= anumeralType(8)) {
      input -= anumeralType(8);
      verdict.innerText += `${rnumeralType(8)}`; // Roman Numeral - X
      // Arabic Numeral - 9
    } else if (input >= anumeralType(9)) {
      input -= anumeralType(9);
      verdict.innerText += `${rnumeralType(9)}`; // Roman Numeral - IX
      // Arabic Numeral - 5
    } else if (input >= anumeralType(10)) {
      input -= anumeralType(10);
      verdict.innerText += `${rnumeralType(10)}`; // Roman Numeral - V
      // Arabic Numeral - 4
    } else if (input >= anumeralType(11)) {
      input -= anumeralType(11);
      verdict.innerText += `${rnumeralType(11)}`; // Roman Numeral - IV
      // Arabic Numeral - 1
    } else if (input >= anumeralType(12)) {
      input -= anumeralType(12);
      verdict.innerText += `${rnumeralType(12)}`; // Roman Numeral - I
    }
  }

  // if (!input) {
  //   verdict.innerText = "Please enter a valid number";
  // } else if (input === -1){
  //   verdict.innerText = "Please enter a number greater than or equal to 1";
  // } else if (input >= 4000) {
  //   verdict.innerText = "Please enter a number less than or equal to 3999";
  // }
  // else {
  //   verdict.innerText = "BROKEN";
  // }
}
