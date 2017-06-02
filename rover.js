var myRover = {
  position: [0,0],
  direction: 'N'
};

var grid = new Array(10);
for (i = 0; i < 10; i++) {
	grid[i] = new Array(10);
	for (j = 0; j < 10; j++) {
		grid[i][j] = "["+i+","+j+"]";
		}
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++;
       if(rover.position[1]>9) rover.position[1] = 0;
      break;
    case 'E':
      rover.position[0]++;
        if(rover.position[0]>9) rover.position[0] = 0;
      break;
    case 'S':
      rover.position[1]--;
        if(rover.position[1]<0) rover.position[1] = 9;
      break;
    case 'W':
      rover.position[0]--;
      if(rover.position[0]<0) rover.position[0] = 9;
      break;
     }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--;
        if(rover.position[1]<0) rover.position[1] = 9;
      break;
    case 'E':
      rover.position[0]--;
      if(rover.position[0]<0) rover.position[0] = 9;
      break;
    case 'S':
      rover.position[1]++;
      if(rover.position[1]>9) rover.position[1] = 0;
      break;
    case 'W':
      rover.position[0]++;
      if(rover.position[0]>9) rover.position[0] = 0;
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
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
}

var actualOrder = "fflfrbb";
marsRover(myRover, actualOrder);
