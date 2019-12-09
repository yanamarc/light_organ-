
var audio, context, analyser, src, array;
var field = document.createElement("div");
field.classList.add("container-field");

for (var i = 0; i < 144; i++) {
    var cell = document.createElement("div");
    cell.classList.add("exel");
    field.appendChild(cell);
}

var container = document.getElementsByClassName("container")[0];
container.appendChild(field);

audio = document.getElementById("audio");

audio.addEventListener("canplay", () => {
    console.log("play");
    if (!context) {
        preparation();
    } else {
        loop();
    }
});

function preparation() {
    context = new AudioContext();
    analyser = context.createAnalyser();
    src = context.createMediaElementSource(audio);
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 64;
    loop();
}

function loop() {
    window.requestAnimationFrame(loop);
    array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);
    document.querySelectorAll(".exel").forEach((el, index) => {
        const xfactor = array[index];
        const r = xfactor + 250 * (index / xfactor);
        const g = 250 * (index / xfactor);
        const b = 50;
        el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}
