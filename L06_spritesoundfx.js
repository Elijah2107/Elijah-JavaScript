let soundEffect, bgMusic, staticImage;
let x =0;
let y = 0;
let secondGuy;
let secondGuyX = 200;
let secondGuyY = 200;
function preload() {
    soundEffect = loadSound("assets/pop.mp3");
    bgMusic = loadSound("assets/star_wars_theme_8_bit.mp3");
    staticImage = loadImage("assets/pico-a.png");
    secondGuy = loadImage("assets/steve.svg");
}

function setup() {
    createCanvas(5000, 1000);
    bgMusic.loop();
}

function draw() {
    background("lightblue");
    
    
    let w = 110;
    let h = 123;
    image(staticImage, x,y,w,h);
    
    image(secondGuy,secondGuyX,secondGuyY,96,128)
    if (keyIsDown( LEFT_ARROW)) {
        x = x-9;
    }
    if (keyIsDown (RIGHT_ARROW)) {
        x = x+9;
    }
    x = constrain(x, 0, width-110);
    if (keyIsDown(UP_ARROW)) {
        y = y-9;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y = y+9;
    }
    secondGuyY = constrain(secondGuyY, 0, height-133);
    if (keyIsDown(87)) {
        secondGuyY = secondGuyY - 1000;
    }
    if (keyIsDown(83)) {
        secondGuyY = secondGuyY + 1000;
    }
    y = constrain(y, 0, height-133);
    if (keyIsDown(65)) {
        secondGuyX = secondGuyX - 1000;
    }   
    if (keyIsDown(68)) {
        secondGuyX = secondGuyX + 1000;
    }
    secondGuyX = constrain(secondGuyX, 0, width-110);
}

