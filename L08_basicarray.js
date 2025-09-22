let soundsfx;
let xpos = 100;
function preload() {
    soundsfx = loadSound("assets/star_wars_theme_8_bit.mp3")
}
function setup() {
    createCanvas(400,400);
    background(200);
    fill("orange");
    rect(width/2, height/2, 200,200);
    fill("black");
    textSize(32);
    textAlign(CENTER,CENTER);
    text("WELCOME", width/2, height/2);
}
// function setup() {
//     createCanvas(600,400);
//     background(80);
//     fill("cyan");
//     textSize(32);
//     // text("My name is Elijah", 50,50);
//     // text("I am 12 years old", 50,100);
//     // text("I like playing Minecraft", 50,150)
//     let ypos = 50;
//     let minecraftFoods = ["steak", "porkchop", "salmon", "mutton", "chicken", "bread","melon", "golden carrot", "golden apple", "notch apple"]
//     for(let index=0; index < minecraftFoods.length; index++) {
//         console.log (minecraftFoods[index]);
//         text(minecraftFoods[index], 20, ypos)
//         ypos = ypos + 30;
//     }
// }
    

function draw() {
    if (keyIsDown(32)) {
        soundsfx.play();
    }
    if (keyIsDown(DOWN_ARROW)) {
        soundsfx.stop();
    }
}
