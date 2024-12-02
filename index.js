const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#"];
const notesAudio = [];

function playNote() {
    let sound = Audio(assets/sounds/notes/c4.mp3);
    sound.play()
    document.getElementById("C-note")[0].addEventListener("click", playNote);
}