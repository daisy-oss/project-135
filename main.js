img="";
status4="";
value[ ];
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    object=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("id").innerHTML="Status : Detecting Objects";
}

function preload(){
    img=loadImage("drr.jpg");
}

function draw(){
    image(img,0,0,640,420);
    fill("#000FF");
    text("bed",100,75);
    noFill();
    stroke("#FF0000");
    rect(90,60,520,350);
}
function modelLoaded(){
    console.log("Model done");
    status4=true;
    object.detect(img, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    value[results];
}