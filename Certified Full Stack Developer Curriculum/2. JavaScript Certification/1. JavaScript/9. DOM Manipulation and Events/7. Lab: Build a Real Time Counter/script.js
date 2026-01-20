
// Grab elements
const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

// Helper to update UI and enforce the 50-char limit
function updateCounter() {
    // Read current value
    const currentValue = textInput.value;

    // Trim to 50 chars (covers typing & pasting)
    const trimmed = currentValue.slice(0, 50);

    // If we trimmed anything, write it back (prevents exceeding 50)
    if (trimmed !== currentValue) {
        textInput.value = trimmed;
    }

    // Count after trimming
    const count = trimmed.length;

    // Update the counter text
    charCount.textContent = `Character Count: ${count}/50`;

    // Turn red at exactly 50; otherwise normal
    if (count === 50) {
        charCount.classList.add("maxed");
    } else {
        charCount.classList.remove("maxed");
    }
}

// Listen for real-time updates
textInput.addEventListener("input", updateCounter);

// Initialize on load (in case the textarea has preset content)
updateCounter();
