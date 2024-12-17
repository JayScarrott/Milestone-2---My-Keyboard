console.log("JavaScript file loaded!");

const notes = {
    "C-note": "assets/sounds/notes/c4.mp3", 
    "C-sharp-note": "assets/sounds/notes/c4s.mp3", 
    "D-note": "assets/sounds/notes/d5.mp3", 
    "D-sharp-note": "assets/sounds/notes/d5s.mp3", 
    "E-note": "assets/sounds/notes/e5.mp3", 
    "F-note": "assets/sounds/notes/f5.mp3", 
    "F-sharp-note": "assets/sounds/notes/f5s.mp3", 
    "G-note": "assets/sounds/notes/g5.mp3", 
    "G-sharp-note": "assets/sounds/notes/g5s.mp3", 
    "A-note": "assets/sounds/notes/a5.mp3", 
    "A-sharp-note": "assets/sounds/notes/a5s.mp3", 
    "B-note": "assets/sounds/notes/b5.mp3", 
};

function playNote() {
    console.log("Button clicked:", this.id);
    const soundPath = notes[this.id];
    const sound = new Audio(soundPath)
    sound.play()
    
}

const noteButtons = document.querySelectorAll("button");

noteButtons.forEach(function(button) {
    button.addEventListener("click", playNote);
});