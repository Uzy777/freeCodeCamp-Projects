const searchInput = document.getElementById("search-input");

const searchBtn = document.getElementById("search-button");

const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const creatureWeight = document.getElementById("weight");
const creatureHeight = document.getElementById("height");
const creatureType = document.getElementById("types");
const creatureSpecialName = document.getElementById("special-name");
const creatureSpecialDescription = document.getElementById("special-description");
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
      creatureName.innerText = JSON.stringify(data["name"]).slice(1, -1);
      creatureId.innerText = "#" + JSON.stringify(data["id"]);
      creatureWeight.innerText = "Weight: " + JSON.stringify(data["weight"]);
      creatureHeight.innerText = "Height: " + JSON.stringify(data["height"]);
      creatureType.innerText = JSON.stringify(data["types"]);

      creatureSpecialName.innerText = JSON.stringify(data.special["name"]).slice(1, -1);
      creatureSpecialDescription.innerText = JSON.stringify(data.special["description"]).slice(1, -1);

      const hpStat = data.stats.find(stat => stat.name === "hp")
      creatureHp.innerText = hpStat.base_stat;

      const attackStat = data.stats.find(stat => stat.name === "attack")
      creatureAttack.innerText = attackStat.base_stat;

      const defenseStat = data.stats.find(stat => stat.name === "defense")
      creatureDefense.innerText = defenseStat.base_stat;

      const specialAttackStat = data.stats.find(stat => stat.name === "special-attack")
      creatureSpecialAttack.innerText = specialAttackStat.base_stat;

      const specialDefenseStat = data.stats.find(stat => stat.name === "special-defense")
      creatureSpecialDefense.innerText = specialDefenseStat.base_stat;

      const speedStat = data.stats.find(stat => stat.name === "speed")
      creatureSpeed.innerText = speedStat.base_stat;
      
      

      testP.innerText = JSON.stringify(data);
      
      console.log(JSON.stringify(data));
    })

    .catch(error => {
      alert("Creature not found")
      // console.error("There was a problem with the fetch operation:", error)
    })



  // if (searchInput.value === "Red") {
  //   alert("Creature not found")
  // }
}) 


