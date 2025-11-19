function repeatStringNumTimes(str, num) {

let result = "";

  if (num <= 0) {
    return ""
  }

for (let i = 0; i < num; i++) {
  result += str;
}
return result

}


console.log(repeatStringNumTimes("abc", 4))