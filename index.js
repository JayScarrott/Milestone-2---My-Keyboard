console.log("JavaScript file loaded!");

const notes = {
    "C-note": "assets/sounds/notes/c3.mp3", 
    "C-sharp-note": "assets/sounds/notes/c-3.mp3", 
    "D-note": "assets/sounds/notes/d3.mp3", 
    "D-sharp-note": "assets/sounds/notes/d-3.mp3", 
    "E-note": "assets/sounds/notes/e3.mp3", 
    "F-note": "assets/sounds/notes/f3.mp3", 
    "F-sharp-note": "assets/sounds/notes/f-3.mp3", 
    "G-note": "assets/sounds/notes/g3.mp3", 
    "G-sharp-note": "assets/sounds/notes/g-3.mp3", 
    "A-note": "assets/sounds/notes/a3.mp3", 
    "A-sharp-note": "assets/sounds/notes/a-3.mp3", 
    "B-note": "assets/sounds/notes/b3.mp3",
    "C2-note": "assets/sounds/notes/c4.mp3",  
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