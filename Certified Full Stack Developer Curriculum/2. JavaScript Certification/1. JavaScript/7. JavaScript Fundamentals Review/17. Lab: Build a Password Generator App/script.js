function generatePassword(passwordLength) {
let password = "";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

  for (let i = 0; i < passwordLength; i++) {
    const randomPassword = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomPassword)
  }

console.log(`Generated password: ${password}`);

  return password

}

let password = generatePassword(7)