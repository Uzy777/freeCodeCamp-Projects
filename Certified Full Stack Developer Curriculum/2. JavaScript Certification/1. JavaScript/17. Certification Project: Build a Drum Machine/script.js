const display = document.getElementById("display");
const pads = document.querySelectorAll(".drum-pad")

const keyToName = {
    Q: "Heater-1",
    W: "Heater-2",
    E: "Heater-3",
    A: "Heater-4",
    S: "Clap",
    D: "Open-HH",
    Z: "Kick-n'-Hat",
    X: "Kick",
    C: "Closed-HH"
}


function triggerPad(key) {
    const upperKey = key.toUpperCase();
    if (!keyToName[upperKey]) return;

    const audio = document.getElementById(upperKey)
    if (!audio) return

    
    audio.currentTime = 0;
    audio.play();

    display.textContent = keyToName[upperKey]
    }


pads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const key = pad.textContent.trim()[0];
    triggerPad(key)
  })
})


document.addEventListener("keydown", (e) => {
  triggerPad(e.key);
});


