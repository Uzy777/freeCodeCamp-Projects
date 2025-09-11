const questions = [
    {
        category: "Cars",
        question: "What does ABS stand for in cars?",
        choices: ["Automatic Braking System", "Anti-lock Braking System", "Advanced Brake Safety"],
        answer: "Anti-lock Braking System"
    },
    {
        category: "Cars",
        question: "Which company manufactures the Mustang?",
        choices: ["Chevrolet", "Ford", "Dodge"],
        answer: "Ford"
    },
    {
        category: "Cars",
        question: "What is the term for a car’s fuel efficiency?",
        choices: ["Horsepower", "Torque", "Miles per gallon"],
        answer: "Miles per gallon"
    },
    {
        category: "Cars",
        question: "Which country is home to the car brand Ferrari?",
        choices: ["USA", "Italy", "France"],
        answer: "Italy"
    },
    {
        category: "Cars",
        question: "What type of engine does a Tesla use?",
        choices: ["Diesel", "Electric", "Hybrid"],
        answer: "Electric"
    }
];




function getRandomQuestion(questionsArray) {
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    return questionsArray[randomIndex];

}


function getRandomComputerChoice(choicesArray) {
    const random = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[random];
}



function getResults(question, computerchoice) {
    if (computerchoice === question.answer) {
        return "The computer's choice is correct!"
    } else {
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
}







console.log(questions);



console.log(getRandomQuestion(questions));



console.log(getRandomComputerChoice(questions));