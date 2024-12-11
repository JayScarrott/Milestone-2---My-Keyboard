const notes = {
    "C": "assets/sounds/notes/c4.mp3", 
    "C#": "assets/sounds/notes/c4#.mp3", 
    "D": "assets/sounds/notes/d5.mp3", 
    "D#": "assets/sounds/notes/d5#.mp3", 
    "E": "assets/sounds/notes/e5.mp3", 
    "F": "assets/sounds/notes/f5.mp3", 
    "F#": "assets/sounds/notes/f5#.mp3", 
    "G": "assets/sounds/notes/g5.mp3", 
    "G#": "assets/sounds/notes/g5#.mp3", 
    "A": "assets/sounds/notes/a5.mp3", 
    "A#": "assets/sounds/notes/a5#.mp3", 
    "B": "assets/sounds/notes/b5.mp3", 
};

function playNote() {
    let sound = Audio(assets/sounds/notes/c4.mp3);
    sound.play()
    
}

document.getElementById("C-note")[0].addEventListener("click", playNote);