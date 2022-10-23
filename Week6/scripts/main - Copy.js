var images = {};
var paths = [
    "images/BackgroundLines.png",
    "images/X.png",
    "images/O.png"
];
var imagesLoaded = 0;
var ctx = null;
var canvasWidth = 0;
var canvasHeight = 0;
var lastClick = null;
var player = "x";
var squares = {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: ""}
var squareKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var gameOver = false;
var winner = null;

main();

function main() {
    initializeGlobals();

    if (ctx != null) {
        loadImages();
    }
    else {
        alert("Can't initialize Canvas. Canvas graphics may be"
        + " unsupported on your device.");
        return;
    }
}
function initializeGlobals() {
    const canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
}
function loadImages() {
    paths.map(loadImage);
    paths.map(addListener);
}
function loadImage(path) {
    const img = new Image();
    img.src = path;
    images[path] = img;
}
function addListener(path) {
    images[path].addEventListener("load", onLoad);
}
function onLoad() {
    imagesLoaded++;
    const totalImages = paths.length;

    if (imagesLoaded == totalImages) {
        startGame(); //exectueAsyn is better than an async function,
                    //perhaps the third most naive,
                    //because it gives a delay to let the page
                    //finish loading, but still too heavy on the
                    //browser. Browsers aren't designed to run
                    //main game loops, even when you aren't
                    //drawing every cycle. I tested it thoroughly.
        //executeAsync(startGame);
    }
}
/*function executeAsync(func) {
    setTimeout(func, 2000);
}*/
function startGame() {  //the most naive way to implement this is
                        //to enter into a game loop directly from main.
                        //Your page will never stop loading if you
                        //do. The second most naive way to implement
                        //this:
                        //      async function startGame() {}
                        //Naive because your page will never even
                        //finish loading everything before the loop
                        //hogs all the cycles.
    const game = new Game();
    game.start();
}
class Game {
    start() {
        addClickListeners();
        drawBoard();

        /*while (!gameOver) {           //NAIVE method, see startGame
            doUpdates();
        }*/                      //The setInterval method
                                 //actually works without causing
                                 //performance problems, so you can
                                 //run a real main game loop from it,
                                 //and render game objects plenty fast
                                 //for any simple sprite-based game.
                                 //Ultimately I chose to place doUpdates()
                                 //in the onClick() listener
                                 //because tic-tac-toe doesn't require
                                 //continous rendering, but I could
                                 //easily switch it by uncommenting
                                 //this line and commenting that one with
                                 //no issues.
        //setInterval(doUpdates, 500); //500 milliseconds
    }
}
function addClickListeners() {
    let clickBoxes = document.querySelector(".toe-grid").children;
    clickBoxes = Array.from(clickBoxes);
    clickBoxes.map(addClickListener);
}
function addClickListener(clickBox) {
    clickBox.addEventListener("click", onClick);
}
function onClick(e) {
    const clickBox = e.target;
    lastClick = clickBox.className;
    doUpdates();
}
function drawBoard() {
    ctx.drawImage(images["images/BackgroundLines.png"], 0, 0);
    squareKeys.map(drawSquare);
}
function drawSquare(squareKey) {
    const x = clickX(squareKey);
    const y = clickY(squareKey);
    const square = squares[squareKey];
    let source = null;

    if (square == "x") {
        source = "images/X.png";
    }
    else if (square == "o") {
        source = "images/O.png";
    }
    if (source != null) {
        ctx.drawImage(images[source], x, y);
    }
}
function clickX(lastClick) {
    const click = parseInt(lastClick);
    const column = click % 3;
    let x = 0;
    switch (column) {
        case 1: x = 0; break;
        case 2: x = 200; break;
        case 0: x = 400; break;
    }
    return x;
}
function clickY(lastClick) {
    const click = parseInt(lastClick);
    let y = 0;
    switch (click) {
        case 1: case 2: case 3: y = 0; break;
        case 4: case 5: case 6: y = 200; break;
        case 7: case 8: case 9: y = 400; break;
    }
    return y;
}
// NAIVE implementation of doUpdates if using a game loop. My final
//implementation however does doUpdats in an listener, so it safe.
//Otherwise lastClick could be modified before
//doUpdates is finished. Better implementation would use a buffer of
//clicks. There are many other better practices as well, but this
//program demonstrates how an app can be built, and a framework
//developed, without making the code too complicated.
function doUpdates() {
    if (needsUpdate()) {
        setSquare();
        playerHasWon(player, squares) ? resetGame(): null;
        switchPlayers();
        drawBoard();
    }
    lastClick = null;
}
function needsUpdate() {
    return lastClick != null && squares[lastClick] == "";
}
function setSquare() {
      squares[lastClick] = player;
}
function resetGame() {
    document.querySelector(".body-note").innerHTML =
        `${player} was the last winner. New game started.`;
    resetVariables();
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath();
}
function resetVariables() {
    lastClick = null;
    player = "x";
    squares = {1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: ""}
    squareKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
}
function playerHasWon(player, squares) {
    let hasWon = false;
    if (playerHasWonARow(player, squares)) {
        hasWon = true;
    } else if (playerHasWonAColumn(player, squares)) {
        hasWon = true;
    } else if (playerHasWonADiagonal(player, squares)) {
        hasWon = true;
    }
    return hasWon;
}
function playerHasWonARow(player, squares) {
    if (squares['1']==player && squares['2']==player && squares['3']==player) {
        return true;}
    if (squares['4']==player && squares['5']==player && squares['6']==player) {
        return true;}
    if (squares['7']==player && squares['8']==player && squares['9']==player) {
        return true;}
    return false;
}
function playerHasWonAColumn(player, squares) {
    if (squares['1']==player && squares['4']==player && squares['7']==player) {
        return true;}
    if (squares['2']==player && squares['5']==player && squares['8']==player) {
        return true;}
    if (squares['3']==player && squares['6']==player && squares['9']==player) {
        return true;}
    return false;
}
function playerHasWonADiagonal(player, squares) {
    if (squares['1']==player && squares['5']==player && squares['9']==player) {
        return true;}
    if (squares['7']==player && squares['5']==player && squares['3']==player) {
        return true;}
    return false;
}
function switchPlayers() {
    if (player == "x") {
        player = "o";
    }
    else if (player == "o") {
        player = "x";
    }
}


