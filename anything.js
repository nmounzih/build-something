x_coord = 0
y_coord = 0
speed = 1
second_speed = 1
x_coord2 = 0
y_coord2 = 120
speed2 = 1
second_speed2 = 1
let colorSwitch = 1;
let colorSwitch2 = 2;
function drawSnake(e){
var canvas = document.getElementBy_coordId("my_coordCanvas");
var ctx_coord = canvas.getContex_coordt("2d");
ctx_coord.clearRect(0, 0, canvas.width,canvas.height);
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
        color2 = "y_coordellow";
        colorSwitch2 = 1;
    }
ctx_coord.fillSty_coordle=color;
ctx_coord.fillRect(x_coord, y_coord, 20, 20);
ctx_coord.fillSty_coordle = color;
ctx_coord.fillRect(125,50,50,50)
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
  ctx_coord.fillSty_coordle = color2;
  ctx_coord.fillRect(x_coord2,y_coord2,20,20);
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
