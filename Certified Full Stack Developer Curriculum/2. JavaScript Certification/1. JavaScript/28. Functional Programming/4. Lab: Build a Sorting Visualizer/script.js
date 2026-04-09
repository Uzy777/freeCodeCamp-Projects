const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");




const generateElement = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const generateArray = () => {
    const arr = [];

    for (let i = 0; i < 5; i++) {
        arr.push(generateElement())
    }

    return arr
}


const generateContainer = () => {
    const div = document.createElement("div")
    return div

}

const fillArrContainer = (element, array) => {
    element.innerText = "";

    for (let i = 0; i < array.length; i++) {
        const span = document.createElement("span");

        span.textContent = array[i];

        element.appendChild(span)
    }
}


const isOrdered = (int1, int2) => {
    if (int1 <= int2) {
        return true
    } else {
        return false
    }
}


const swapElements = (intArray, index) => {
    if (!isOrdered(intArray[index], intArray[index + 1])) {
        const temp = intArray[index];
        intArray[index] = intArray[index + 1];
        intArray[index + 1] = temp
    }

}


const highlightCurrentEls = (element, index) => {
    const second = element.children[index + 1];
    const first = element.children[index];

    if (first && second) {
        first.style.border = "2px dashed red";
        second.style.border = "2px dashed red";
    }

}

generateBtn.addEventListener("click", (() => {
    const arr = generateArray();

    arrayContainer.innerHTML = "";

    arrayContainer.appendChild(startingArray);

    fillArrContainer(startingArray, arr);
}))


sortBtn.addEventListener("click", (() => {
    if (startingArray.children.length === 0) {
        return;
    }

    const arr = Array.from(startingArray.children).map(span => Number(span.textContent));

    arrayContainer.innerHTML = "";
    arrayContainer.appendChild(startingArray);

    fillArrContainer(startingArray, arr);

    let swapped;
    let firstStepUsed = false;


    do {
        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            let stepDiv;

            if (!firstStepUsed) {
                stepDiv = startingArray;
                firstStepUsed = true;
            } else {
                stepDiv = generateContainer();
                fillArrContainer(stepDiv, arr);
                arrayContainer.appendChild(stepDiv);
            }

            highlightCurrentEls(stepDiv, i);

            if (!isOrdered(arr[i], arr[i + 1])) {
                swapElements(arr, i);
                swapped = true;
            }
        }
    } while (swapped);

    const finalDiv = generateContainer();
    fillArrContainer(finalDiv, arr);
    arrayContainer.appendChild(finalDiv);
}))