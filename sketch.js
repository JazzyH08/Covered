
var siah= 400; // controls sun height



function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  

}

//The draw function happens over and over again
function draw() {

  background(180,220,255);
  
  
  //sun
  stroke(255, 170, 50);
  strokeWeight(3)
  fill(255,200,100);
   ellipse(250, siah, 100,100);
  siah= siah - 1; //makes sun move up
  fill (40);
  stroke(0);
  strokeWeight (2);
  rect (180, 350, 140, 100);

  //sunray
  stroke(255,220,120);
  strokeWeight(3);
  line(mouseX, siah, mouseX-60, siah-120);
  line(mouseX, siah, mouseX+60, siah-120);
  line(mouseX, siah, mouseX-120, siah);
  line(mouseX, siah, mouseX+120, siah);
  line(mouseX, siah, mouseX-80,siah+80);
  line(mouseX, siah, mouseX,+80,siah+80);

    //roof
  fill(60);
  triangle (160,350,340,350,250,280);

  //windows
  stroke(200,150,50);
  strokeWeight(2);
  fill(255,230,150);
  rect(225,380,50,40);

  //glow
  stroke(0);
  strokeWeight(0);
  var dotX = random(width);
  var dotY = random(height);
  fill(255,255,150,40);
  ellipse(250,400,160,160);
  fill(255,255,150,70);
  ellipse(250,400,120,120);
  fill (255,255,150,100);
  ellipse(mouseX,mouseY,120);

  //sparkles
  stroke(255);
  strokeWeight(1);
  var dotX= random(width);
  var dotY= random(height);
  fill(255, 255, 150, 160);
  ellipse(dotX, dotY, 5);

  
  fill(230,40,210);
  stroke(255,255,255);
  strokeWeight(5);
  textFont('Courier');
  textSize(60);
  text('Covered',50,200);

}

function mousePressed(){
  if (siah>=500) {
    siah=0;
  } else {
     siah= siah+20;
  }



}
