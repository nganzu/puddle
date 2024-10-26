function setup() {
    createCanvas(800,400);
    background(12455);
    fill(225);
    rectMode(CENTER);
  }
  
  function draw() {
  
    let r = random(40);
    let m = mouseX;
    console.log(m + " " + r);
    if (m < width/4)  {
      background(m);
      fill(255);
      circle(m, height/2, r * 9, r * 9);;;
    } else {
      background(width +m );
      rect(m, height/1, r * 9, r * 9);
    }

    for (let i = 0; i < 200; i += 225) {
        for (let j = 0; j < 1000; j += 200) {
          rand = random(225);
          fill(rand);
          rect( i+34, j+20, 1000, 1000 );
          console.log("this has a greyscale value of" + rand);
        }
      }
    
    
     
      let y1 = mouseY;
      if (mouseX < 250)  {
       
        for (let i = 0; i < mouseX; i += 20) {
          r1 = random(90);
          fill(r1);
          rect( i+5, y1, 10, 10 );
          console.log("r1 = " + r1);
         }
    
      }
      if (mouseX > 300)  {
    
        let mx = mouseX;
        for (let i = 0; i < mouseX; i += 20) {
          r2 = random(50,255);
          fill(r2,30);
          rect( mx, i+5, 20, 10 );
          console.log("r2 = " + r2);
         }
    
        if (mouseY < 250) {
    
          fill(100,0,20,90);
          fill(255);
          circle(100, 100, 100);(mouseX,y1,mouseX-50,y1+30,mouseX+50,y1+50);
    
        }  else {
          
          for (let i = 0; i < mouseX; i += 20) {
            r3 = random(100);
            fill(200,100,0,r3);
            rect( i+5, y1, 10, 10 );
            console.log("r3 = " + r3);
           }
    
          fill(255,120,0,50);
          ellipse(mouseX+200,y1,0,30);
    
        }
    
    
      }
   
   
    }
    
   
   
    

    
  
   