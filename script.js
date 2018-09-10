let colorToFind = document.querySelector("#colorToFind");
let innerContent = document.querySelector("#innerContent");
let newGame = document.querySelector("#new");
let easyGame = document.querySelector("#easy");
let normalGame = document.querySelector("#normal");
let hardGame = document.querySelector("#hard");

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
    gameWon = false;
    gameInitialized();
});

easyGame.addEventListener("click", function () {
    if (!isEasy) {
        isEasy = true;
        isNormal = false;
        isHard = false;
        gameWon = false;
        /** Disable the other colors */
        for(i=4; i<10; i++){
            color[i].classList.remove("d-block");
            color[i].classList.add("d-none");
        }

        /** Start a new game */
        gameInitialized();
    }
});

normalGame.addEventListener("click", function () {
    if (!isNormal) {
        isEasy = false;
        isNormal = true;
        isHard = false;
        gameWon = false;
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

        /** Start a new game */
        gameInitialized();
    }
});

hardGame.addEventListener("click", function () {
    if (!isHard) {
        isEasy = false;
        isNormal = false;
        isHard = true;
        gameWon = false;
        /** Enable the third row of colors */
        for(i=4; i<10; i++){
            color[i].classList.remove("d-none");
            color[i].classList.add("d-block");
        }

        /** Start a new game */
        gameInitialized();
    }
});


function gameInitialized() {
    /** Check if is easy - default */
    if (isEasy) {
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
        var correctColorNumber = Math.floor(Math.random() * 3) + 1;
        colorToFind.innerHTML = color[correctColorNumber].style.backgroundColor
    }
    /** Check if is Normal */
    else if (isNormal) {
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
    }
    /** Check is is Hard */
    else if (isHard) {
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
    }
}

gameInitialized();