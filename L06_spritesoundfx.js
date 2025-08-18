let soundEffect, bgMusic, staticImage;
function preload() {
    soundEffect = loadSouns("assets/pop.mp3");
    bgMusic = loadSouns("assets/bossaNova.mp3");
    staticImage = loadImage("assets/pico-a.png");
}

function setup() {
    createCanvas(200, 200);
}
