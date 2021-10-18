function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.position(525,300);

 video=createCapture(VIDEO);
video.size(300,400)
video.position(525,250);

var pnet=ml5.poseNet(video,modelLoade);

pnet.on("pose",gotposes);

}

function draw(){
image(video,525,250,300,300);
}

function takesnapshort(){
    save("red_nose_image.png");
}

function modelLoade(){
    console.log("mode loaded");
}

function gotposes(results){
if (results.length>0){
    console.log(results);
}
}