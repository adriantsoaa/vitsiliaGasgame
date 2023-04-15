/*RABEANTOANDRO Mirantsoa Adrianna n°8 MSI3*/

// window.onload = function (){
const canvas = document.getElementById("ground");
const context = canvas.getContext("2d");

const x1 = y1 = 50, x2 = y2 = 190, x3 = y3 = 330, y4 = 470;
const sectionW = 280, sectionH = 420;
const sizePers = 10;

const groundColor = "#9F7550";
const section1Color = "#7E3300";
const winColor = "#22780F";
const loseColor = "#FD0000"; 
const oppColor = "white";
const meColor = "#FFC30F";
const container = "#ffc30fe6";

var gameLevel;
var compart;

var playerMe0 = {
    x: x1+sizePers,
    y: 505,
    radius: sizePers,
    color: meColor,
    score: 0
}

var playerMe1 = {
    x: 120,
    y: 505,
    radius: sizePers,
    color: meColor,
}

var playerMe2 = {
    x: x2,
    y: 505,
    radius: sizePers,
    color: meColor,
}

var playerMe3 = {
    x: 260,
    y: 505,
    radius: sizePers,
    color: meColor,
}

var playerMe4 = {
    x: x3-sizePers,
    y: 505,
    radius: sizePers,
    color: meColor,
}

var playerOpp5 = {
    x: x2,
    y: y4,
    radius: sizePers,
    velocityX: -2,
    velocityY: 0,
    color: oppColor,
    score: 0
}

var playerOpp6 = {
    x: x1+sizePers,
    y: y3,
    radius: sizePers,
    velocityX: 2,
    velocityY: 0,
    color: oppColor
}

var playerOpp7 = {
    x: x2,
    y: y2,
    radius: sizePers,
    velocityX: 2,
    velocityY: 0,
    color: oppColor
}

var playerOpp8 = {
    x: x3-sizePers,
    y: y1,
    radius: sizePers,
    velocityX: -2,
    velocityY: 0,
    color: oppColor
}

var playerOpp9 = {
    x: x2,
    y: y1+sizePers,
    radius: sizePers,
    velocityX: 0,
    velocityY: 2,
    color: oppColor
}

var playerAct = playerMe0;

// Keydown event - playerAct
function keyDown(e){ 
    if (e.key == "ArrowLeft")
        playerAct.x -= 10;
    if (e.key == "ArrowUp" && playerAct.y > 15)
        playerAct.y -= 10;
    if (e.key == "ArrowRight")
        playerAct.x += 10;
    if (e.key == "ArrowDown" && playerAct.y < 505)
        playerAct.y += 10;     
}
/*
document.addEventListener("keydown",(e) => {
    // code    
});
*/

// create rectangle
function drawRect(x,y,w,h,color){
    context.fillStyle = color;
    context.fillRect(x,y,w,h); // x,y: position, w: width, h: height
}

// create rectangle - stroke
function drawRectStroke(x,y,w,h,color,th){
    context.strokeStyle = color;
    context.lineWidth = th; // th: thickness;
    context.strokeRect(x,y,w,h);
}

// create line - continuous
function drawLineCont(x,y,xp,yp,color,th){
    context.beginPath();
    context.moveTo(x,y); // x,y: point position
    context.lineTo(xp,yp); // xp,yp: point destination
    context.closePath();
    context.strokeStyle = color;
    context.lineWidth = th;   
    context.stroke();
}

// create circle (person)
function drawPlayer(x,y,r,color){
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2,false); // r: radius, startA: startAngle, endA: endAngle, c: counterclockwise
    context.fillStyle = color;
    context.fill();
    context.closePath();
}

// create discontinous line
function drawLineDiscont1(x,y,w,h,color,wd){
    // wd: width section
    for(let i = 0; i <= wd; i += 15)
        drawRect(x+i,y,w,h,color);
}
function drawLineDiscont2(x,y,w,h,color,wd){
    // wd: width section
    for(let i = 0; i <= wd; i += 17)
        drawRect(x,y+i,w,h,color);
}

// create score text
function drawText1(text,x,y,color){
    context.fillStyle = color;
    context.font = "50px Georgia";
    context.fillText(text,x,y);
}
function drawText2(text,x,y,color){
    context.fillStyle = color;
    context.font = "20px Georgia";
    context.fillText(text,x,y);
}
function drawText3(text,x,y,color){
    context.fillStyle = color;
    context.font = "13px Georgia";
    context.fillText(text,x,y);
}

function allGround(){
    // clear content canvas
    context.clearRect(0,0,canvas.width,canvas.height);

    // ground
    drawRect(0,0,canvas.width,canvas.height,groundColor);

    // section
    drawRect(x1,y1,sectionW,sectionH,section1Color);

    // section - stroke
    drawRectStroke(x1,y1,sectionW,sectionH,oppColor,4);

    // line
    drawLineCont(x1,15,x3,15,oppColor,2);
    drawLineCont(x1,505,x3,505,oppColor,2);
    drawLineDiscont1(x1,y2,10,2,oppColor,sectionW);
    drawLineDiscont1(x1,y3,10,2,oppColor,sectionW);
    drawLineDiscont2(x2,y1,2,10,oppColor,sectionH);

    // players 1,2,3,4,5,6,7,8
    drawPlayer(playerMe0.x,playerMe0.y,playerMe0.radius,playerMe0.color);
    drawPlayer(playerMe1.x,playerMe1.y,playerMe1.radius,playerMe1.color);
    drawPlayer(playerMe2.x,playerMe2.y,playerMe2.radius,playerMe2.color);
    drawPlayer(playerMe3.x,playerMe3.y,playerMe3.radius,playerMe3.color);
    drawPlayer(playerMe4.x,playerMe4.y,playerMe4.radius,playerMe4.color);

    drawPlayer(playerOpp5.x,playerOpp5.y,playerOpp5.radius,playerOpp5.color);
    drawPlayer(playerOpp6.x,playerOpp6.y,playerOpp6.radius,playerOpp6.color);
    drawPlayer(playerOpp7.x,playerOpp7.y,playerOpp7.radius,playerOpp7.color);
    drawPlayer(playerOpp8.x,playerOpp8.y,playerOpp8.radius,playerOpp8.color);
    drawPlayer(playerOpp9.x,playerOpp9.y,playerOpp9.radius,playerOpp9.color);
        
    // score
    drawText2("Computer",380,67,oppColor);
    drawText1(playerOpp5.score,405,140,oppColor); //playerOpp5
    drawText1(playerMe0.score,405,420,meColor); //playerMe0
    drawText2("User",400,470,meColor);
    drawText3("Finish Line",390,18,meColor);
    drawText3("Departure Line",380,508,oppColor);
}

// collision detection between playerMe and playerOpp
function collision(playerMe,playerOpp){
    playerMe.top = playerMe.y - sizePers;
    playerMe.right = playerMe.x + sizePers;
    playerMe.bottom = playerMe.y + sizePers;
    playerMe.left = playerMe.x - sizePers;
    
    playerOpp.top = playerOpp.y - sizePers;
    playerOpp.right = playerOpp.x + sizePers;
    playerOpp.bottom = playerOpp.y + sizePers;
    playerOpp.left = playerOpp.x - sizePers;

    return playerMe.top < playerOpp.bottom && playerMe.left < playerOpp.right && playerMe.right > playerOpp.left && playerMe.bottom > playerOpp.top;
}

// players movements update
function update(){
    // movement  
    if (playerAct.y == 505){
        playerOpp5.x += playerOpp5.velocityX;
        playerOpp6.x += playerOpp6.velocityX;
        playerOpp7.x += playerOpp7.velocityX;
        playerOpp8.x += playerOpp8.velocityX;
        playerOpp9.y += playerOpp9.velocityY;

    if (playerOpp5.x - sizePers < x1 || playerOpp5.x + sizePers > x3)
        playerOpp5.velocityX *= -1;
    if (playerOpp6.x - sizePers < x1 || playerOpp6.x + sizePers > x3)
        playerOpp6.velocityX *= -1;
    if (playerOpp7.x - sizePers < x1 || playerOpp7.x + sizePers > x3)
        playerOpp7.velocityX *= -1;
    if (playerOpp8.x - sizePers < x1 || playerOpp8.x + sizePers > x3)
        playerOpp8.velocityX *= -1;
    if (playerOpp9.y - sizePers < y1 || playerOpp9.y + sizePers > y4)
        playerOpp9.velocityY *= -1;
    }
    else{
        playerOpp5.x += (playerAct.x - playerOpp5.x) * gameLevel * 1;
        playerOpp6.x += (playerAct.x - playerOpp6.x) * gameLevel * 2;
        playerOpp7.x += (playerAct.x - playerOpp7.x) * gameLevel * 3;
        playerOpp8.x += (playerAct.x - playerOpp8.x) * gameLevel * 4;
        if (playerAct.y + sizePers < y4 && playerAct.y - sizePers > y1)
            playerOpp9.y += (playerAct.y - playerOpp9.y) * gameLevel * 5;
    }
    
    // win points (playerOpp)
    if (collision(playerAct,playerOpp5) || collision(playerAct,playerOpp6) || collision(playerAct,playerOpp7) || collision(playerAct,playerOpp8) || collision(playerAct,playerOpp9) || playerAct.y + sizePers > canvas.height || playerAct.y - sizePers < 0 || playerAct.x - sizePers < x1 || playerAct.x + sizePers > x3){
        playerOpp5.score ++;
        playerAct.y = 505;
        if (playerAct == playerMe0){
            playerAct.x = x1+sizePers;
            playerAct = playerMe1;
        }
        else if (playerAct == playerMe1){
            playerAct.x = 120;
            playerAct = playerMe2;
        }else if (playerAct == playerMe2){
            playerAct.x = x2;
            playerAct = playerMe3;
        }else if (playerAct == playerMe3){
            playerAct.x = 260;
            playerAct = playerMe4;
        }else if (playerAct == playerMe4){
            playerAct.x = x3-sizePers;
            compart = false;
            removeEventListener("keydown",keyDown,true);
        }
    }
    
    // win points (playerMe)
    if (playerAct.y == 15 && compart){
        playerMe0.score ++;
        if (playerAct == playerMe0)
            playerAct = playerMe1;
        else if (playerAct == playerMe1)
            playerAct = playerMe2; 
        else if (playerAct == playerMe2)
            playerAct = playerMe3;      
        else if (playerAct == playerMe3)
            playerAct = playerMe4;
        else if (playerAct == playerMe4){
            compart = false;
            removeEventListener("keydown",keyDown,true);
        }            
    }
    
    // Win or Lose
    if (playerAct == playerMe4 && compart == false){
        if (playerMe0.score > playerOpp5.score){
            drawRect(x1+40,y2+20,sectionW-80,100,container);
            drawText2("You win!",x2-30,265,winColor);
        }
        else{
            drawRect(x1+40,y2+20,sectionW-80,100,container);
            drawText2("Game Over",x2-45,265,loseColor);
        }
    }
}

// play game
function game(){
    allGround();
    update();
}

function choiceLevel(){
    document.getElementById("choice").style.display = "block";
}

function checkChoice(idClicked){
    var choiceUser = document.getElementById(idClicked).value;
    if (choiceUser == "easy")
        gameLevel = 0.01;
    if (choiceUser == "normal")
        gameLevel = 0.02;
    if (choiceUser == "hard")
        gameLevel = 0.03;
    document.getElementById("choice").style.display = "none";
    addEventListener("keydown",keyDown,true);
    compart = true;
    playerAct = playerMe0;
    playerMe0.score = playerOpp5.score = 0;
    playerMe0.x = x1+sizePers;
    playerMe1.x = 120;
    playerMe2.x = x2;
    playerMe3.x = 260;
    playerMe4.x = x3-sizePers;
    playerMe0.y = playerMe1.y = playerMe2.y = playerMe3.y = playerMe4.y = 505;
}

// all ground with position players
const framePerSecond = 10;
setInterval(game,1000/framePerSecond);