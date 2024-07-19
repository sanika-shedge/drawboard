let brushColor;
let brushSize;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    brushColor = color(0);
    brushSize = 12;
}

function mouseDragged() {
  if (mouseIsPressed) {
    // Change color based on mouse position
    brushColor = color(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), 150);

    // Draw the brush stroke
    let lineHue=brushColor;
    stroke(lineHue);
    strokeWeight(brushSize);
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}

function keyPressed(){
  if (keyIsPressed){
    //code to clear canvas
    key==='c' || key==='C';
    background(255);
} 
}


