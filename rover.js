//rovers
var roverOne = {
  position: [0,0],
  direction: 'N',
  name: "Rover One"
};

var roverTwo = {
  position: [3,3],
  direction: 'N',
  name: "Rover Two"
};

//grid
var grid = new Array(10);
for (i = 0; i < 10; i++) {
	grid[i] = new Array(10);
	for (j = 0; j < 10; j++) {
		grid[i][j] = 0;
		}
}

//coloca obstáculos
function randomPosition(){
  var x, y;
  x = Math.floor(Math.random() * 10);
  y = Math.floor(Math.random() * 10);
  return [x,y];
}
function obstacles (totalObstacles) {
  for (i=0; i<totalObstacles; i++) {
    console.log("New obstacle at [" + randomPosition() + "]");
    var actualObstacles = randomPosition();
    var x = actualObstacles[0];
    var y = actualObstacles[1];
    grid [x][y] = 1;
  }
}

//funciones de movimiento
function goForward(rover) {
  var potentialPosition = rover.position;
  switch(rover.direction) {
    case 'N':
      potentialPosition[1]++;
       if(potentialPosition[1]>9) potentialPosition[1] = 0;
      break;
    case 'E':
      potentialPosition[0]++;
        if(potentialPosition[0]>9) potentialPosition[0] = 0;
      break;
    case 'S':
      potentialPosition[1]--;
        if(potentialPosition[1]<0) potentialPosition[1] = 9;
      break;
    case 'W':
      potentialPosition[0]--;
      if(potentialPosition[0]<0) potentialPosition[0] = 9;
      break;
     }
  if (grid [potentialPosition[0]] [potentialPosition[1]] === 0) {
    rover.position = potentialPosition;
  } else {
  console.log("The rover can't move because there is an obstacle or another rover");
  }
  console.log(rover.name + " position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goBack(rover) {
  var potentialPosition = rover.position;
  switch(rover.direction) {
    case 'N':
      potentialPosition[1]--;
        if(potentialPosition[1]<0) potentialPosition[1] = 9;
      break;
    case 'E':
      potentialPosition[0]--;
      if(potentialPosition[0]<0) potentialPosition[0] = 9;
      break;
    case 'S':
      potentialPosition[1]++;
      if(potentialPosition[1]>9) potentialPosition[1] = 0;
      break;
    case 'W':
      potentialPosition[0]++;
      if(potentialPosition[0]>9) potentialPosition[0] = 0;
      break;
  }
  if (grid [potentialPosition[0]] [potentialPosition[1]] === 0) {
    rover.position = potentialPosition;
  } else {
  console.log("The rover can't move because there is an obstacle or another rover");
  }
  console.log(rover.name + " position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }}

function marsRover(rover, orders){
  grid [rover.position[0]][rover.position[1]] = 0;
  for(var i = 0; i < orders.length; i++){
    var orderCode = orders[i];
    switch(orderCode){
      case 'f':
        goForward(rover);
      break;
      case 'b':
        goBack(rover);
      break;
      case 'r':
        turnRight(rover);
      break;
      case 'l':
        turnLeft(rover);
      break;
      default : console.log('Invalid order');
      break;
    }
  }
  grid [rover.position[0]][rover.position[1]] = 1;
}

//¡a probar!
obstacles (20);
var actualOrder = "fflfrbblfffrbbbbbbbb";
marsRover(roverTwo, actualOrder);
marsRover(roverOne, actualOrder);
