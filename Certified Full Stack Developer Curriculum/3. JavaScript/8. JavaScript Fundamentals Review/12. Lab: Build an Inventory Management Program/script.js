let inventory = [];

function findProductIndex(productName) {
let lowerName = productName.toLowerCase()

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].name === lowerName) {
    return i;
  }
}
return -1;
}


function addProduct(productName, quantity) {
  let lowerName = productName.toLowerCase();
  let index = findProductIndex(lowerName);

  if (index !== -1) {
    inventory[index].quantity += quantity;
    console.log(`${lowerName} quantity updated`);
  } else {
    inventory.push({ name: lowerName, quantity: quantity });
    console.log(`${lowerName} added to inventory`)
  }
}


function removeProduct(productName, quantity) {
  let lowerName = productName.toLowerCase();
  let index = findProductIndex(lowerName);

  if (index === -1) {
    console.log(`${lowerName} not found`);
  } else {
    if (inventory[index].quantity < quantity) {
      console.log(`Not enough ${lowerName} available, remaining pieces: ${inventory[index].quantity}`);
    } else {
      inventory[index].quantity -= quantity;
      if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);
      }
      console.log(`Remaining ${lowerName} pieces: ${inventory[index]?.quantity ?? 0}`);
    }
  }
}

console.log(findProductIndex("FloUr"))