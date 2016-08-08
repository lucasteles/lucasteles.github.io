var c = document.getElementById("c");
var ctx = c.getContext("2d");
var WIDTH = c.width = window.innerWidth;
var HEIGHT = c.height = window.innerHeight;
var qtdBalls=10;

var balls = new Array();
var ctx;
//var colors = ["red","blue","yellow","green"];

function circle(x,y,r, c) {
    
  ctx.fillStyle=c;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}

function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}


function draw() {
  clear(); 
for (var i = 0; i < balls.length; i++) {
    var ball = balls.shift();   
    console.log(Colision(i)); 
    var color = "hsl("+ball.hue+", 100%, 50%)"  ;
    ball.hue += 0.5;
  
    circle(ball.x, ball.y, 10, color);
     
    if (ball.x + ball.dx > WIDTH || ball.x + ball.dx < 0 )
      ball.dx = -ball.dx;
    if (ball.y + ball.dy > HEIGHT || ball.y + ball.dy < 0)
        ball.dy = -ball.dy;

  
    ball.x += ball.dx;
    ball.y += ball.dy;
   
      
    balls.push(ball);
  }
   window.requestAnimationFrame(draw);
}
 
function Colision(index)
{
  var atual = balls[index];  
  
  for (i=0; i<balls.length; i++){
    if (atual!==undefined && i!==index)
      { 
          if (   
             (atual.x+atual.dx >= balls[i].x && atual.y+atual.dy >= balls[i].y ) &&
           (atual.x <= balls[i].x+balls[i].dx && atual.y <= balls[i].y+balls[i].dy ) 
             ) 
            return 1;
            
            
      } 
    
  }
   return 0;  
} 


function init(){
  
for (var i = 0; i < qtdBalls; i++) {
     balls.push({
       x : 150,
       y : 150,
       dx : Math.random() * 10,
       dy : Math.random() * 10,
       hue : Math.random() * 360
     }) 
} 
  
  window.requestAnimationFrame(draw);
}

init();