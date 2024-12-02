function playNote() {
    let sound = new Audio(assets/sounds/notes/c4.mp3);
    sound.play()
    document.getElementById("C-note").addEventListener("click", playNote);
}