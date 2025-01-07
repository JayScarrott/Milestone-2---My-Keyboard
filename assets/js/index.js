console.log("JavaScript file loaded!");

const soundEffects = {
    piano: {
        "C-note": "assets/sounds/notes/a-3.mp3",
        "C-sharp-note": "assets/sounds/notes/octave-1/c-3.mp3",
        "D-note": "assets/sounds/notes/octave-1/d3.mp3",
        "D-sharp-note": "assets/sounds/notes/octave-1/d-3.mp3",
        "E-note": "assets/sounds/notes/octave-1/e3.mp3",
        "F-note": "assets/sounds/notes/octave-1/f3.mp3",
        "F-sharp-note": "assets/sounds/notes/octave-1/f-3.mp3",
        "G-note": "assets/sounds/notes/octave-1/g3.mp3",
        "G-sharp-note": "assets/sounds/notes/octave-1/g-3.mp3",
        "A-note": "assets/sounds/notes/octave-1/a4.mp3",
        "A-sharp-note": "assets/sounds/notes/octave-1/a-4.mp3",
        "B-note": "assets/sounds/notes/octave-1/b4.mp3",
    },

    guitar: {},

    synth: {},
}



/**
 * Fucntion for the buttons playing the notes
 */

function playNote() {
    console.log("Button clicked:", this.id);
    const soundPath = notes[this.id];
    const sound = new Audio(soundPath)
    sound.play()

}

const noteButtons = document.querySelectorAll("button");

noteButtons.forEach(function (button) {
    button.addEventListener("click", playNote);
});

document.getElementById('submitName').addEventListener('click', function () {
    const userName = document.getElementById('userName').value;
    if (userName) {
        document.getElementById('userGreeting').textContent = `Welcome, ${userName}, to My Keyboard`;
    } else {
        document.getElementById('userGreeting').textContent = 'Please enter your name.';
    }
});