const score = 34

function getAverage(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;

}


function getGrade(studentScore) {
  if (studentScore === 100) {
    return "A+"
  } else if (studentScore >= 90) {
    return "A"
    }else if (studentScore >= 80) {
      return "B"
    } else if (studentScore >= 70) {
      return "C"
    } else if (studentScore >= 60) {
      return "D"
    } else if (studentScore >= 0) {
      return "F"
    } else {
      return "Invalid Score Provided!"
    }
}


function hasPassingGrade (studentScore) {

let grade = getGrade(studentScore)

if (grade === "F") {
  return false
} else {
  return true
}

  }


function studentMsg (arr, studentScore) {

let grade = hasPassingGrade( studentScore)

if (grade === true) {
  return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(studentScore)}. You passed the course.` 
} else if (grade === false) {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(studentScore)}. You failed the course.` 
}
}


// Testing
console.log(getGrade(score))

console.log(hasPassingGrade(score))

console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]))

console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85))