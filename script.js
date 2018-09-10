let changed = document.querySelector("#colorChange");
let colorToFind = document.querySelector("#colorToFind");
let innerContent = document.querySelector("#innerContent");
let newGame = document.querySelector("#new");
let easyGame = document.querySelector("#easy");
let normalGame = document.querySelector("#normal");
let hardGame = document.querySelector("#hard");
var correctColorNumber;

var gameWon = false;
var isEasy = true;
var isNormal = false;
var isHard = false;

/** for loop to get all div colors */
let color = Array();
for (cl = 1; cl < 10; cl++) {
    color[cl] = document.querySelector("#color" + [cl]);
    // console.log(color[cl]);
    /** set the colors 4-9 to be hidden */
    if(cl >= 4){
        color[cl].classList.add("d-none");
    }
}

/** New Game */
newGame.addEventListener("click", function(){
    gameInitialized();
});

easyGame.addEventListener("click", function () {
    if (!isEasy) {
        isEasy = true;
        isNormal = false;
        isHard = false;
        /** Disable the other colors */
        for(i=4; i<10; i++){
            color[i].classList.remove("d-block");
            color[i].classList.add("d-none");
        }
    }
    /** Start a new game */
    gameInitialized();
});

normalGame.addEventListener("click", function () {
    if (!isNormal) {
        isEasy = false;
        isNormal = true;
        isHard = false;
        /** Disable the other colors */
        for(i=7; i<10; i++){
            color[i].classList.remove("d-block");
            color[i].classList.add("d-none");
        }
        /** Enable the second row of colors */
        for(i=4;i<7;i++){
            color[i].classList.remove("d-none");
            color[i].classList.add("d-block");
        }
    }
    /** Start a new game */
    gameInitialized();
});

hardGame.addEventListener("click", function () {
    if (!isHard) {
        isEasy = false;
        isNormal = false;
        isHard = true;
        /** Enable the third row of colors */
        for(i=4; i<10; i++){
            color[i].classList.remove("d-none");
            color[i].classList.add("d-block");
        }
    }
    /** Start a new game */
    gameInitialized();
});


function gameInitialized() {
    /** new game  */
    gameWon = false;
    /** remove the background of jumbotron and hint messages */
    changed.style.backgroundColor = "#fff";
    changed.style.color = "#000";
    innerContent.innerHTML = "Click a Box";
    innerContent.classList.remove("display-2");
    /** Check if is easy - default */
    if (isEasy) {
        /** Enable the current colors */
        for(i=1; i<4; i++){
            color[i].classList.remove("d-none");
            color[i].classList.add("d-block");
        }
        /**For loop 9 colors (number of boxes) */
        for (i = 1; i < 4; i++) {
            /** For loop 3 define color (RGB parameters) */
            for (j = 0; j < 3; j++) {
                let red = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);
                let colorful = "rgb(" + red + "," + green + "," + blue + ")";
                color[i].style.backgroundColor = colorful;
            }
        }
        /** Random number (1-3) to find which is the correct color */
        correctColorNumber = Math.floor(Math.random() * 3) + 1;
        colorToFind.innerHTML = color[correctColorNumber].style.backgroundColor;
    }
    /** Check if is Normal */
    else if (isNormal) {
        /** Enable the current colors */
        for(i=1; i<7; i++){
            color[i].classList.remove("d-none");
            color[i].classList.add("d-block");
        }
        /**For loop 9 colors (number of boxes) */
        for (i = 1; i < 7; i++) {
            /** For loop 3 define color (RGB parameters) */
            for (j = 0; j < 3; j++) {
                let red = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);
                let colorful = "rgb(" + red + "," + green + "," + blue + ")";
                color[i].style.backgroundColor = colorful;
            }
        }
        /** Random number (1-6) to find which is the correct color */
        correctColorNumber = Math.floor(Math.random() * 6) + 1;
        colorToFind.innerHTML = color[correctColorNumber].style.backgroundColor;
    }
    /** Check is is Hard */
    else if (isHard) {
        /** Enable the current colors */
        for(i=1; i<10; i++){
            color[i].classList.remove("d-none");
            color[i].classList.add("d-block");
        }
        /**For loop 9 colors (number of boxes) */
        for (i = 1; i < 10; i++) {
            /** For loop 3 define color (RGB parameters) */
            for (j = 0; j < 3; j++) {
                let red = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);
                let colorful = "rgb(" + red + "," + green + "," + blue + ")";
                color[i].style.backgroundColor = colorful;
            }
        }
        /** Random number (1-9) to find which is the correct color */
        correctColorNumber = Math.floor(Math.random() * 9) + 1;
        colorToFind.innerHTML = color[correctColorNumber].style.backgroundColor;
    }
}

gameInitialized();

/** Function that verifies if you won the game */
function winCondition(buttonClicked){
    if(buttonClicked.style.backgroundColor == color[correctColorNumber].style.backgroundColor){
        gameWon = true;
        var colorContrast = getContrastYIQ(buttonClicked.style.backgroundColor);
        changed.style.backgroundColor = buttonClicked.style.backgroundColor;
        changed.style.color = colorContrast;
        innerContent.innerHTML = "<strong>You Win!</strong>"
    }else{
        buttonClicked.classList.remove("d-block");
        buttonClicked.classList.add("d-none");
        innerContent.innerHTML = "<strong>Try Again</strong>";
    }
    innerContent.classList.add("display-2");
}

/** Click Events */
for(i=1;i<10;i++){
    color[i].addEventListener("click", function(){
        if(!gameWon){
            winCondition(this);
        }
    });
}
/** get the color contrast to better text view */
function getContrastYIQ(rgbcolor){
    rgbcolor = rgbcolor.split(/\(([^)]+)\)/)[1].replace(/ /g, '');
	var r = parseInt(rgbcolor.split(',')[0], 10);
	var g = parseInt(rgbcolor.split(',')[1], 10);
	var b = parseInt(rgbcolor.split(',')[2], 10);
	var yiq = ((r*299)+(g*587)+(b*114))/1000;
	return (yiq >= 128) ? 'black' : 'white';
}