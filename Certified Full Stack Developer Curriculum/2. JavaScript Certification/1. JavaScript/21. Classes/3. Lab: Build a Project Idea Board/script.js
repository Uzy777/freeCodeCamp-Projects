const projectStatus = {
    PENDING: { description: "Pending Execution" },
    SUCCESS: { description: "Executed Successfully" },
    FAILURE: { description: "Execution Failed" }
};

class ProjectIdea {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.status = projectStatus.PENDING;
    }

    updateProjectStatus(newStatus) {
        this.status = newStatus;
    }
}

class ProjectIdeaBoard {
    constructor(title) {
        this.title = title;
        this.ideas = [];
    }

    pin(projectIdea) {
        this.ideas.push(projectIdea);
    }

    unpin(projectIdea) {
        this.ideas = this.ideas.filter((idea) => idea !== projectIdea);
    }

    count() {
        return this.ideas.length;
    }

    formatToString() {
        let output = `${this.title} has ${this.count()} idea(s)\n`;

        this.ideas.forEach((idea) => {
            output += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
        });

        return output;
    }
}