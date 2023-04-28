//Set global variable that would contain the position, velocity and the html element "ball"
var velocity = 3;
var positionX = 0;
var positionY = 0;
var time = 100;
var ball = document.getElementById('ball');

//write a function that can change the position of the html element "ball"
function moveBall() {
  positionX = positionX + velocity;
  ball.style.top = positionX + 'px';
  ball.style.left = positionY + 'px';
  // two fixed x-axis coordinates (you will use these variable in step 3)
    
    }
  //ball.style.top = positionX + 'px';
  //ball.style.left = positionY + 'px';
  

  
  // This call the moveBall function every 100ms
  setInterval(moveBall, time);