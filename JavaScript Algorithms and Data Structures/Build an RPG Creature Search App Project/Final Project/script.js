const searchInput = document.getElementById("search-input");

const searchBtn = document.getElementById("search-button");


searchBtn.addEventListener("click", function(){
  if (searchInput.value === "Red") {
    alert("Creature not found")
  }
}) 
