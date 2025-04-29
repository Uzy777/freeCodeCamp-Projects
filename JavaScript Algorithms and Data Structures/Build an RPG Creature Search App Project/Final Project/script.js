const searchInput = document.getElementById("search-input");

const searchBtn = document.getElementById("search-button");

const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const creatureWeight = document.getElementById("weight");
const creatureHeight = document.getElementById("height");
const creatureType = document.getElementById("types");
const creatureHp = document.getElementById("hp");
const creatureAttack = document.getElementById("attack");
const creatureDefense = document.getElementById("defense");
const creatureSpecialAttack = document.getElementById("special-attack");
const creatureSpecialDefense = document.getElementById("special-defense");
const creatureSpeed = document.getElementById("speed");

const testP = document.getElementById("test");




// fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creatures`)

//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }
//     return response.json();
//   })

//   .then(data => {
//     console.log(data);
//   })

//   .catch(error => {
//     console.error("There was a problem with the fetch operation:", error)
//   })


searchBtn.addEventListener("click", function(){

  const nameOrId = searchInput.value

  const url = `https://rpg-creature-api.freecodecamp.rocks/api/creature/${nameOrId}`

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Creature not found");
      }
      return response.json();
    })

    .then(data => {
      creatureName.innerText = JSON.stringify(data["name"]);
      creatureId.innerText = JSON.stringify(data["id"]);
      creatureWeight.innerText = JSON.stringify(data["weight"]);
      creatureHeight.innerText = JSON.stringify(data["height"]);
      creatureType.innerText = JSON.stringify(data["types"]);
      creatureHp.innerText = JSON.stringify(data["hp"]);
      creatureAttack.innerText = JSON.stringify(data["attack"]);
      creatureDefense.innerText = JSON.stringify(data["defense"]);
      creatureSpecialAttack.innerText = JSON.stringify(data["special-attack"]);
      creatureSpecialDefense.innerText = JSON.stringify(data["special-defense"]);
      creatureSpeed.innerText = JSON.stringify(data["speed"]);
      
      testP.innerText = JSON.stringify(data);
      
      console.log(JSON.stringify(data));
    })

    .catch(error => {
      console.error("There was a problem with the fetch operation:", error)
    })



  // if (searchInput.value === "Red") {
  //   alert("Creature not found")
  // }
}) 


