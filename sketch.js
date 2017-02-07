 var colorList = ['#38C17F','#1B8C79','#69A89C','#97DBBC'];
function setup() {
 createCanvas(800,600);
 background('#7FD3A5')
  frameRate(1)
  
}

function draw() {
  
  
 for(var x=0 ; x < width ; x+=40){
 for(var y=0 ; y < height ; y+=40){
   //var size = map(volume,0,1,width/5,width/2);
 noStroke()
 var distance = dist(mouseX,mouseY,pmouseX,pmouseY);
  strokeWeight(distance);
  rect(mouseX,mouseY,pmouseX,pmouseY);
  var index = floor(random() * colorList.length);
 var colorHex = colorList[index];
 fill(color(colorHex));

  triangle(x,y,10+x,y,5+x,10+y);
   noStroke();
   var index = floor(random() * colorList.length);
   var colorHex = colorList[index];
   fill(color(colorHex));
   
   quad(x+15,y+5,x+5,y+15,x+15,y+30,x+30,y+15)
   noStroke();
   fill(color(colorHex));
     
     
  
 }
 }
   
}