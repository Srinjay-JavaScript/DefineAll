img = '';
status = "";
object = [];
function preload(){
    img = loadImage("dog2.jpeg");
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', loaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}
function draw(){
    image(img, 0, 0, 640, 420)
    if(status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(img, gotObject);
        for( i = 0; i < object.length; i++){

            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("objNum").innerHTML = "Number of Objects dectected: " + object.length;

            fill(r, g, b);
            x = object[i].x;
            y = object[i].y;
            w = object[i].width;
            h = object[i].height;
            percentage = Math.floor(object[i].confidence * 100);
             text(object[i].label + " " + percentage + "%", x+10, y+20);
             textStyle(BOLD);
             textSize(20);
             stroke(r, g, b);
             noFill();
             rect(x, y, w, h);
             
        }
    }
 
 }
function loaded(){
    console.log("Cocossd is loaded.");
    status = true;
    objectDetector.detect(img, gotObject);
}
function gotObject(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        object = results;
    }
}

