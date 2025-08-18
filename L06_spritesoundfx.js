let soundEffect, bgMusic, staticImage;
function preload() {
    soundEffect = loadSound("assets/pop.mp3");
    bgMusic = loadSound("assets/bossaNova.mp3");
    staticImage = loadImage("assets/pico-a.png");
}

function setup() {
    createCanvas(400, 200);
    bgMusic.loop();
}

function draw() {
    background("lightblue");
    
    let y = 0;
    let w = 110;
    let h = 123;
    image(staticImage, x,y,w,h);
    if (keyCode === LEFT_ARROW) {
        x = x - 5
    }
    if (keyCode === RIGHT_ARROW) {
        x = x+5
    }
}

function keyPressed() {
    if (keyCode === 32) {
        soundEffect.play();    
    }
}
