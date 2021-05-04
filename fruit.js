img = '';
status = "";
function preload(){
    img = loadImage("fruit.jpg");
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', loaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}
function draw(){
    image(img, 0, 0, 640, 420);
    //grapes
    fill('purple');
    textSize(20);
    textStyle(BOLD);
    text("Grapes", 70+20, 70+20);
    noFill();
    stroke('purple');
    rect(70, 70, 280, 325);
    //pear
    fill("orange");
    text("Pear", 355, 135);
    noFill();
    stroke("orange");
    rect(350, 120, 120, 120);
    //apple
    fill("red");
    text("Apple", 380+10, 240+20);
    noFill();
    stroke("red");
    rect(380, 240, 120, 120);
 }
function loaded(){
    console.log("Cocossd is loaded.");
    status = true;
    objectDetector.detect(img, gotObject);
}
function gotObject(results, error){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
