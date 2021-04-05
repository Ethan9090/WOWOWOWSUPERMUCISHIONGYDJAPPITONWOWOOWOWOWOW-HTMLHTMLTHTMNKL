
    var Msound = "";

function preload(){

    Msound = loadSound("MYSound.mp3");

}

function playSound(){
    Msound.play();
}

function setup(){

    canvas = createCanvas(500,500);
    canvas.center();

    camera = createCapture(VIDEO);
    camera.hide();

    MyModel = ml5.poseNet(camera,modelLoaded);
    
}

function modelLoaded(){
    console.log("Posenet works now");
}

function draw(){

    image(camera,0,0,500,500);

}