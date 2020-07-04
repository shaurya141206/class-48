var gameState = 1;
var canvas;
var database;
var isDrawing = false;
var currentPath = [];
var drawing = [];
var dB_drawing = [];
var timer = 30; 
var player1score = 0;
var player2score = 0;
var crazyidea=1;
var matching;
var notmatching;

function preload (){
    image1 = loadImage('Images/image1.jpeg');
    image2 = loadImage('Images/image2.jpeg');
    image3 = loadImage('Images/image3.jpeg');
    image4 = loadImage('Images/image4.jpeg');
    image5 = loadImage('Images/image5.jpeg');
    image6 = loadImage('Images/image6.jpeg');
    image7 = loadImage('Images/Capthhure.PNG');
    image8 = loadImage('Images/Capthure.PNG');
    image9 = loadImage('Images/Capture.PNG');
}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight - 300);
    //canvas.parent("canvascontainer");
    database = firebase.database();
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);
    input = createInput("Name");
    input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    playbutton = createSprite(displayWidth/2 + 30, displayHeight/2, 198, 50)
    playbutton.depth = -1;
    matching = createSprite (displayWidth/2 - 300, 575, 198, 50);
    matching.scale = 0.3
    matching.addImage (image9)
    notmatching = createSprite (displayWidth/2 - 40, 575, 198, 50)
    notmatching.scale = 0.3
    notmatching.addImage (image8)
    matching.visible=false
    notmatching.visible=false
}

function startPath() {
    isDrawing = true;
    currentPath = [];
    drawing.push(currentPath);
}

function endPath() {
    isDrawing = false;
    //dBref.push(drawing);
}

function draw() {
    background("white");
   
    if (gameState === 1){
        textSize(100);
        text("Draw the Picture!!!", displayWidth/2 - 350, displayHeight/2 - 300)
    }

    if (mousePressedOver(playbutton ) || touch.length > 0){
        input.hide();
        playbutton.destroy();
        gameState = 2;
        touch = [];
    }

    if(gameState===3){
        picture123.scale = 0.5;
        timer = timer - 0.5;
        textSize(30);
        fill("red");
        text("Timer : "+Math.round(timer), displayWidth/2, displayHeight - 650)
        textSize(30)
        fill("black")
        text("player1score : "+player1score, displayWidth - 800, displayHeight - 700);
        text("player2score : "+player2score, displayWidth - 350, displayHeight - 700) 
        if(mouseWentUp("leftButton")){
            crazyidea=2;
            console.log(crazyidea)
            }
    }
    if(gameState===7){
        picture123.scale = 0.5;
        timer = timer - 0.5;
        textSize(30);
        fill("red");
        text("Timer : "+Math.round(timer), displayWidth/2, displayHeight - 650)
        textSize(30)
        fill("black")
        text("player1score : "+player1score, displayWidth - 800, displayHeight - 700);
        text("player2score : "+player2score, displayWidth - 350, displayHeight - 700) 
        if(mouseWentUp("leftButton")){
            crazyidea=1;
            console.log(crazyidea)
            }
    }

    if (gameState === 2) {
        var saveButton = select('#saveButton');
        saveButton.size(198, 50);
        saveButton.mousePressed(saveDrawing);
        var clearButton = select('#clearButton');
        clearButton.size(198, 50);
        clearButton.mousePressed(clearDrawing);
        picture123 = createSprite(200,200);
        picture123.addImage(image1);
        picture123.scale = 0.5;
        timer = timer - 0.5;
        textSize(30);
        fill("red");
        text("Timer : "+Math.round(timer), displayWidth/2, displayHeight - 650)
        textSize(30)
        fill("black")
        text("player1score : "+player1score, displayWidth - 800, displayHeight - 700);
        text("player2score : "+player2score, displayWidth - 350, displayHeight - 700)
        }
    if ( timer <= 0) {
            gameState = 4;
            textSize(30)
            fill("black")
            text("player1score : "+player1score, displayWidth - 800, displayHeight - 700);
            text("player2score : "+player2score, displayWidth - 350, displayHeight - 700)
            text("time over",displayWidth/2,displayHeight/2);
            text("is the painting matching the picture?", displayWidth/2 - 400, 150)
            matching.visible=true
            notmatching.visible=true
            
            if (mousePressedOver(matching)&&crazyidea===1){
                
                gameState=3
                player1score += 1;
                timer=30
                notmatching.visible = false;
                matching.visible = false;
                var ran = Math.round (random(1,6));
               
                switch(ran){
                    case 1 : picture123.addImage(image1)
                    break;
                    case 2 : picture123.addImage(image2)
                    break;
                    case 3 : picture123.addImage(image3)
                    break;
                    case 4 : picture123.addImage(image4)
                    break;
                    case 5 : picture123.addImage(image5)
                    break;
                    case 6 : picture123.addImage(image6)
                    break;
                    default:
                        break;
                } 
            }
        
    
            if (mousePressedOver(matching)&&crazyidea===2){
                gameState=7
                player2score += 1;
                timer=30
                notmatching.visible = false;
                matching.visible = false;
                var ran = Math.round (random(1,6));
                
                switch(ran){
                    case 1 : picture123.addImage(image1)
                    break;
                    case 2 : picture123.addImage(image2)
                    break;
                    case 3 : picture123.addImage(image3)
                    break;
                    case 4 : picture123.addImage(image4)
                    break;
                    case 5 : picture123.addImage(image5)
                    break;
                    case 6 : picture123.addImage(image6)
                    break;
                    default:
                        break;
                } 
                if(mouseWentUp("leftButton")){
                    crazyidea=1
                    console.log(crazyidea)
                    }
               
            }
        
            if(mousePressedOver(notmatching)){
                gameState=3
                timer=30
                notmatching.visible = false;
                matching.visible = false;
                var ran = Math.round (random(1,6));
                switch(ran){
                    case 1 : picture123.addImage(image1)
                    break;
                    case 2 : picture123.addImage(image2)
                    break;
                    case 3 : picture123.addImage(image3)
                    break;
                    case 4 : picture123.addImage(image4)
                    break;
                    case 5 : picture123.addImage(image5)
                    break;
                    case 6 : picture123.addImage(image6)
                    break;
                    default:
                        break;
                } 
            }
         
        }
       
    drawSprites();
        if (isDrawing) {
        var point = {
            x: mouseX,
            y: mouseY
        };
        currentPath.push(point);
    }
    stroke(25, 34, 234);
    strokeWeight(4);
    noFill();
    for (var i = 0; i < drawing.length; i++) {
        var path = drawing[i];
        beginShape();
        for (var j = 0; j < path.length; j++) {
            vertex(path[j].x, path[j].y);
        }
        endShape();
    }

    //Reading from database
    readData();
    stroke(255, 0, 0);
    strokeWeight(4);
    noFill();

    for (var i = 0; i < dB_drawing.length; i++) {
         var path = dB_drawing[i];
         beginShape();
         for (var j = 0; j < path.length; j++) {
             vertex(path[j].x, path[j].y);
         }
         endShape();
    }
}

function readData() {
    database.ref('MonaLisa/Session1/drawing/').on('child_added', function(data) {
        dB_drawing.push(data.val());
        console.log(dB_drawing);
    })
}

function saveDrawing() {
    var dBref = database.ref('MonaLisa');
    var data = {
        name: 'JSH',
        drawing: drawing,
        //    color: [120, 18, 234],

    };
    //dBref.push(data);
    dBref.set({
        "Session1": data
    })
}

//clear all data in database
function clearDrawing() {
    dB_drawing = [];
    var dBref = database.ref('MonaLisa');
    dBref.remove();
}