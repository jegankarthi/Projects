//Set global variable that would contain the position, velocity and the html element "ball"
var velocityX = 3;
var velocityY = 3;
var positionX = 0;
var positionY = 0;
var positionxmin = 0;
var positionxmax = 150;
var positionymin = 0;
var positionymax = 150;
var time = 5;
var reverse_X = true;
var reverse_Y = true;
var ball = document.getElementById('ball');

//write a function that can change the position of the html element "ball"
function moveBall() {
  if(reverse_X){
    positionX = positionX + velocityX;
    ball.style.right = positionX + 'px';
    ball.style.left = positionX + 'px';
  }else{
    positionX = positionX - velocityX;
    ball.style.right = positionX + 'px';
    ball.style.left = positionX + 'px';
 }
 if(reverse_Y){
  positionY = positionY + velocityY;
  ball.style.left = positionY + 'px';
  ball.style.bottom = positionY + 'px';
}else{
  positionY = positionY - velocityY;
  ball.style.top = positionX - 'px';  
  ball.style.right = positionX + 'px';
}

 if(positionX > positionxmax || positionX === positionxmin){
    reverse_X = !reverse_X;
  }

  if(positionY > positionymax || positionY === positionymin){
    reverse_Y = !reverse_Y;
  }

  // two fixed x-axis coordinates (you will use these variable in step 3)
    
    }
  //ball.style.top = positionX + 'px';
  //ball.style.left = positionY + 'px';
  

  
  // This call the moveBall function every 100ms
  setInterval(moveBall, time);