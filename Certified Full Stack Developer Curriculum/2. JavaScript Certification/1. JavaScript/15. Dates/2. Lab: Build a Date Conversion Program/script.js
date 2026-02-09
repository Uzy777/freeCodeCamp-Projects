const currentDate = new Date()
const currentDateFormat = `Current Date and Time: ${currentDate}`


function formatDateMMDDYYYY(a) {

const day = a.getDate();
const month = a.getMonth() + 1;
const year = a.getFullYear();

  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`
}


function formatDateLong(a) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };



  return `Formatted Date (Month Day, Year): ${a.toLocaleDateString("en-US", options)}`
}


console.log(formatDateMMDDYYYY(currentDate))

console.log("-")

console.log(formatDateLong(currentDate))

console.log("-")

console.log(currentDateFormat)
