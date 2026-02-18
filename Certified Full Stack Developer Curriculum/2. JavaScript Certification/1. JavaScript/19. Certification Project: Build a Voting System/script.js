const poll = new Map();


const addOption = (option) => {
    if (!option || option.trim() === "") {
        return "Option cannot be empty.";
    }

    if (poll.has(option)) {
        return `Option "${option}" already exists.`;
    }

    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
};


const vote = (option, voterId) => {
    if (!poll.has(option)) {
        return `Option "${option}" does not exist.`;
    }

    const voters = poll.get(option);

    if (voters.has(voterId)) {
        return `Voter ${voterId} has already voted for "${option}".`;
    }

    voters.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
};

const displayResults = () => {
    let result = "Poll Results:\n";

    for (const [option, voters] of poll) {
        result += `${option}: ${voters.size} votes\n`;
    }

    return result.trimEnd();
}

addOption("Turkey");
addOption("Morocco");
addOption("Japan");

vote("Turkey", 101);
vote("Turkey", 202);
vote("Morocco", 303);

console.log(displayResults());