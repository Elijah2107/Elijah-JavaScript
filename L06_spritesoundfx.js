let soundEffect, bgMusic, staticImage;
function preload() {
    soundEffect = loadSouns("assets/pop.mp3");
    bgMusic = loadSouns("assets/bossaNova.mp3");
    staticImage = loadImage("assets/pico-a.png");
}

function setup() {
    createCanvas(200, 200);
    bgMusic.loop();
}

function draw() {
    background("lightblue");
    let x = 0;
    let y = 0;
    let w = 110;
    let h = 123;
    image(staticImage, x,)
}
