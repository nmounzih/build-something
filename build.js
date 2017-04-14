x_coord = 0
y_coord = 0
speed = 1
second_speed = 1
x_coord2 = 0
y_coord2 = 120
speed2 = 5
second_speed2 = 1
let colorSwitch = 1;
let colorSwitch2 = 2;
let colorSwitch3 = 1;
function drawSnake(e){
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width,canvas.height);
// ctx_coord.beginPath();
if (colorSwitch === 1) {
        color = "blue";
        colorSwitch = 2;
    } else {
        color = "red";
        colorSwitch = 1;
    }
if (colorSwitch2 === 1) {
        color2 = "green";
        colorSwitch2 = 2;
    } else {
        color2 = "yellow";
        colorSwitch2 = 1;
    }
if (colorSwitch3 === 1) {
        color3 = "purple";
        colorSwitch3 = 2;
    } else {
        color3 = "pink";
        colorSwitch3 = 1;
    }
ctx.fillStyle=color3;
ctx.fillRect(x_coord, y_coord, 20, 20);
ctx.fillStyle = color;
ctx.fillRect(125,50,50,50)
y_coord += speed;
x_coord += second_speed //top
if(y_coord == 130 || (y_coord==30 && x_coord < 175 && x_coord > 125)){
  speed = -speed;
} //left side
if(x_coord == 280|| (x_coord==105 && y_coord < 95 && y_coord > 45)){
  second_speed = -second_speed;
} //bottom
if(y_coord == 0|| (y_coord==100 && x_coord <175 && x_coord > 110)){
  speed = -speed;
}// right side
if(x_coord == 0|| (x_coord==175 && y_coord < 100 && y_coord > 45)){
  second_speed = -second_speed;
// second bouncing box_coord
}
  ctx.fillStyle = color2;
  ctx.fillRect(x_coord2,y_coord2,20,20);
  y_coord2 += speed2;
  x_coord2 += second_speed2 //top
  if(y_coord2 == 130 || (y_coord2==30 && x_coord2 < 175 && x_coord2 > 125)){
    speed2 = -speed2;
  } //left side
  if(x_coord2 == 280|| (x_coord2==105 && y_coord2< 95 && y_coord2 > 45)){
    second_speed2 = -second_speed2;
  } //bottom
  if(y_coord2 == 0|| (y_coord2==100 && x_coord2 <175 && x_coord2 > 110)){
    speed2 = -speed2;
  }// right side
  if(x_coord2 == 0|| (x_coord2==175 && y_coord2 < 100 && y_coord2 > 45)){
    second_speed2 = -second_speed2;
}
}

x = 0
y = .5
z = 1
q = 1
size1 = 50
size2 = 45
size3 = 5
negative = 1
function drawSpirals(){
  var canvas = document.getElementById("canvas2");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width,canvas.height);
  ctx.beginPath();
  ctx.lineWidth = 5;
  var gradient=ctx.createLinearGradient(0,0,300,0);
  // gradient.addColorStop(".3", 'green')
  gradient.addColorStop(x, '#5542e5')
  // gradient.addColorStop('1', 'red')
  gradient.addColorStop(y, 'magenta')
  ctx.strokeStyle = gradient;
  size1 += 10
  if(size1>200 || size1<=50){
    size1 = 50
  }
  ctx.arc(150, 75, size1, 0, 2*Math.PI);
  ctx.stroke();
  x += .02
  y += .02
  if(x>=.9){
    // z *= -1
    x=0
  }
  if(y>=.9){
    // q *= -1
    y=0
  }
  ctx.beginPath();
  ctx.lineWidth = 5;
  var gradient=ctx.createLinearGradient(0,0,300,0);
  // gradient.addColorStop(".3", 'green')
  gradient.addColorStop(x, 'yellow')
  // gradient.addColorStop('1', 'red')
  gradient.addColorStop(y, 'green')
  ctx.strokeStyle = gradient;
  size2 += 10
  if(size2>195 || size2<=45){
    size2 = 45
  }
  ctx.arc(150, 75, size2, 0, 2*Math.PI);
  ctx.stroke();
  x += .02
  y += .02
  if(x>=.9){
    // z *= -1
    x=0
  }
  if(y>=.9){
    // q *= -1
    y=0
  }
  ctx.beginPath();
  size3 += 2 * negative
  ctx.lineWidth = size3;
  if(size3>50||size3<=5){
    negative = -negative
  }
  var gradient=ctx.createLinearGradient(0,0,300,0);
  // gradient.addColorStop(".3", 'green')
  gradient.addColorStop(x, 'purple')
  // gradient.addColorStop('1', 'red')
  gradient.addColorStop(y, 'red')
  ctx.strokeStyle = gradient;
  ctx.arc(150, 75, 40, 0, 2*Math.PI);
  ctx.stroke();
  x += .02
  y += .02
  if(x>=.9){
    // z *= -1
    x=0
  }
  if(y>=.9){
    // q *= -1
    y=0
  }
  ctx.beginPath();
  ctx.lineWidth = 5;
  var gradient=ctx.createLinearGradient(0,0,300,0);
  // gradient.addColorStop(".3", 'green')
  gradient.addColorStop(x, '#21c1f2')
  // gradient.addColorStop('1', 'red')
  gradient.addColorStop(y, '#21f228')
  ctx.strokeStyle = gradient;
  ctx.arc(150, 75, 35, 0, 2*Math.PI);
  ctx.stroke();
  x += .02
  y += .02
  if(x>=.9){
    // z *= -1
    x=0
  }
  if(y>=.9){
    // q *= -1
    y=0
  }
  ctx.beginPath();
  ctx.lineWidth = 5;
  var gradient=ctx.createLinearGradient(0,0,300,0);
  // gradient.addColorStop(".3", 'green')
  gradient.addColorStop(x, 'blue')
  // gradient.addColorStop('1', 'red')
  gradient.addColorStop(y, 'red')
  ctx.strokeStyle = gradient;
  ctx.arc(150, 75, 30, 0, 2*Math.PI);
  ctx.stroke();
  x += .02
  y += .02
  if(x>=.9){
    // z *= -1
    x=0
  }
  if(y>=.9){
    // q *= -1
    y=0
  }
  ctx.beginPath();
  ctx.lineWidth = 5;
  var gradient=ctx.createLinearGradient(0,0,300,0);
  // gradient.addColorStop(".3", 'green')
  gradient.addColorStop(x, '#e2e516')
  // gradient.addColorStop('1', 'red')
  gradient.addColorStop(y, '#590775')
  ctx.strokeStyle = gradient;
  ctx.arc(150, 75, 25, 0, 2*Math.PI);
  ctx.stroke();
  x += .02
  y += .02
  if(x>=.9){
    // z *= -1
    x=0
  }
  if(y>=.9){
    // q *= -1
    y=0
  }
  ctx.beginPath();
  ctx.lineWidth = 5;
  var gradient=ctx.createLinearGradient(0,0,300,0);
  // gradient.addColorStop(".3", 'green')
  gradient.addColorStop(x, '#ed09bb')
  // gradient.addColorStop('1', 'red')
  gradient.addColorStop(y, 'black')
  ctx.strokeStyle = gradient;
  ctx.arc(150, 75, 20, 0, 2*Math.PI);
  ctx.stroke();
  // x += .02
  // y += .02
  if(x>=.9){
    // z *= -1
    x=0
  }
  if(y>=.9){
    // q *= -1
    y=0
  }
  ctx.beginPath();
  ctx.lineWidth = 5;
  var gradient=ctx.createLinearGradient(0,0,300,0);
  // gradient.addColorStop(".3", 'green')
  gradient.addColorStop(x, '#151570')
  // gradient.addColorStop('1', 'red')
  gradient.addColorStop(y, '#0b752b')
  ctx.strokeStyle = gradient;
  ctx.arc(150, 75, 15, 0, 2*Math.PI);
  ctx.stroke();
  // x += .02
  // y += .02
  if(x>=.9){
    // z *= -1
    x=0
  }
  if(y>=.9){
    // q *= -1
    y=0
  }
  ctx.beginPath();
  ctx.lineWidth = 5;
  var gradient=ctx.createLinearGradient(0,0,300,0);
  // gradient.addColorStop(".3", 'green')
  gradient.addColorStop(x, '#dd11c6')
  // gradient.addColorStop('1', 'red')
  gradient.addColorStop(y, '#11d3dd')
  ctx.strokeStyle = gradient;
  ctx.arc(150, 75, 10, 0, 2*Math.PI);
  ctx.stroke();
  // x += .02
  // y += .02
  if(x>=.9){
    // z *= -1
    x=0
  }
  if(y>=.9){
    // q *= -1
    y=0
  }
  ctx.beginPath();
  ctx.lineWidth = 5;
  var gradient=ctx.createLinearGradient(0,0,300,0);
  // gradient.addColorStop(".3", 'green')
  gradient.addColorStop(x, '#f4040c')
  // gradient.addColorStop('1', 'red')
  gradient.addColorStop(y, '#070000')
  ctx.strokeStyle = gradient;
  ctx.arc(150, 75, 5, 0, 2*Math.PI);
  ctx.stroke();
  // x += .02
  // y += .02
  if(x>=.9){
    // z *= -1
    x=0
  }
  if(y>=.9){
    // q *= -1
    y=0
  }
  ctx.beginPath();
  ctx.lineWidth = 5;
  var gradient=ctx.createLinearGradient(0,0,300,0);
  // gradient.addColorStop(".3", 'green')
  gradient.addColorStop(x, '#0ff207')
  // gradient.addColorStop('1', 'red')
  gradient.addColorStop(y, '#ffff05')
  ctx.strokeStyle = gradient;
  ctx.arc(150, 75, 1, 0, 2*Math.PI);
  ctx.stroke();
  // x += .02
  // y += .02
  if(x>=.9){
    // z *= -1
    x=0
  }
  if(y>=.9){
    // q *= -1
    y=0
  }
}
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
function firework(e){
  var canvas = document.getElementById("canvas3");
  var rect = canvas.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  var mousePos = getMousePos(canvas, e);
  console.log(mousePos);
  console.log(canvas.offsetWidth, canvas.offsetHeight);
  console.log("x: " + x + " y: " + y);
  console.log(canvas.width, canvas.height);
  // setInterval(firework(e), 50);
}


// $('#myCanvas').click(drawSnake);
setInterval(drawSnake, 50);
setInterval(drawSpirals, 50);
$('#canvas3').click(firework);
