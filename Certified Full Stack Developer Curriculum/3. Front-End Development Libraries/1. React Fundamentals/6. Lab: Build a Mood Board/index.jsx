export function MoodBoardItem({ color, image, description }) {
    return (
        <div className="mood-board-item" style={{ backgroundColor: color }}>
            <img
                className="mood-board-image"
                src={image}
                alt={description}
            />
            <h3 className="mood-board-text">{description}</h3>
        </div>
    );
}

export function MoodBoard() {
    return (
        <div>
            <h1 className="mood-board-heading">Destination Mood Board</h1>

            <div className="mood-board">
                <MoodBoardItem
                    color="lightblue"
                    image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
                    description="A peaceful pathway through nature"
                />

                <MoodBoardItem
                    color="lightpink"
                    image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
                    description="A calm shore with relaxing vibes"
                />

                <MoodBoardItem
                    color="lightgreen"
                    image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
                    description="Fresh green grass and open space"
                />

                <MoodBoardItem
                    color="lavender"
                    image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
                    description="Adventure and travel across the sea"
                />

                <MoodBoardItem
                    color="peachpuff"
                    image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
                    description="A dreamy destination with beautiful views"
                />
            </div>
        </div>
    );
}

