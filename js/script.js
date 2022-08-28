var sketch;

function setup() {
    createCanvas(windowWidth, windowHeight/2);
  }
  
function draw() {
    background(250, 250, 255, 20);
  
    
    noStroke();
    fill(0, 0, 0);
  
  
    // ★1-3. 円を描こう（x座標とy座標は画面の中心にしよう。大きさは100）
    for(var i = 0; i < 15; i++) {
    ellipse(460 + i * 20 , 540, 4, 4);
    ellipse(460 + i * 20 , 560, 4, 4);
    ellipse(460 + i * 20 , 580, 4, 4);
    ellipse(460 + i * 20 , 600, 4, 4);
  }
    
    fill(0, 0, random(200),70);
    rect(random(width), random(height), 5, 5);

    fill(20,250,255,105);
    rect(random(width),random(height),70,40);

    fill(255,255,255,255)
    rect(random(width),random(height),200,140);
  
    if (mouseIsPressed) {
  
      fill(255,255,255,20);
      stroke(0,0,0);
      strokeWeight(2);
      ellipse(mouseX,mouseY,random(500));

    if(keyIsDown(UP_ARROW))
    {
      background(0,0,0,50);
      background(0,0,0,50);
    }
  
  }
}
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

 new p5(sketch, "container1");
