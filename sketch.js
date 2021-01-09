var ball;
var database,position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballposition = database.ref('ball/position');
    ballposition.on("value",readpos);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,5);
    }
    drawSprites();
}
function readpos(data){
    position = data.val();
    console.log(position.x);
    ball.x = position.x;
    ball.y = position.y;
}

//function changePosition(x,y){
  //  ball.x = ball.x + x;
    //ball.y = ball.y + y;
//}
function writeposition(x,y){
    database.ref('ball/position').set({
        'x':position.x + x,
        'y':position.y + y,
    })
}

