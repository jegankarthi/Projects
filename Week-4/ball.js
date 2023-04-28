// this function makes a ball with position and velocity set
    const size = 20; // size of ball
    const x = []; // position
    const y = [];
    const stepsize = 10;
    const balls = []; // array to hold all free balls
    let velocity_x = [];
    let velocity_y = [];
    let gravity = 1;

    function checkWalls(i) {
      if (x[i] < 0) velocity_x[i] = -velocity_x[i];
      if (x[i] + size > 800) {
        velocity_x[i] = -velocity_x[i];
        x[i] = 800 - size;
      }
      if (y[i] + size > 400) {
        velocity_y[i] = -velocity_y[i];
        y[i] = 400 - size;
      } else if (y[i] < 0) {
        y[i] = 0;
        velocity_y[i] = -velocity_y[i];
      }
    }

    function update() {
      for (let i = 0; i < balls.length; i++) {
        x[i] += velocity_x[i];
        velocity_y[i] += gravity;
        y[i] += velocity_y[i];
        checkWalls(i);
        balls[i].style.left = x[i];
        balls[i].style.top = y[i];
      }
      setTimeout(update, 10); // this calls update ever 1/10 second
    }
    function getRandom(scale) {
      return Math.floor(Math.random() * scale - scale / 2);
    }
   // function factory(total) {
      // check how make balls exist already and add to the array
    //  let n = balls.length;
      for (let i = 0; i < 3; i++) {
        let velx = getRandom(stepsize);
       let vely = getRandom(stepsize);
        makeBall(400 - size / 2, 200 - size / 2, "black", velx, vely, 0);
       // makeBall(400 - size / 2, 200 - size / 2, "red", -velx, -vely, 0);
      }
   // }

function makeBall(xcoord, ycoord, color, velx = 0, vely = 0, fixed = 0) {
  ball = document.createElement("div");
  ball.style.backgroundColor = color;
  ball.className = "ball";
  ball.style.height = ball.style.width = size;
  ball.style.top = ycoord;
  ball.style.left = xcoord;
  document.body.appendChild(ball);
  if (!fixed) {
    // only free balls will be updated
    balls.push(ball);
    x.push(xcoord);
    y.push(ycoord);
    velocity_x.push(velx);
    velocity_y.push(vely);
  }
}
gravity = 0;
update();
