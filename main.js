song1 = shreksophone.mp3;
song2 = mineDiamonds.mp3;

function preload() {
    song1 = loadSound("mineDiamonds.mp3");
    song2 = loadSound("shreksophone.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500)
    }