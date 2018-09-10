let colorToFind = document.querySelector("#colorToFind");
let innerContent = document.querySelector("#innerContent");
let newGame = document.querySelector("#new");
let easyGame = document.querySelector("#easy");
let normalGame = document.querySelector("#normal");
let hardGame = document.querySelector("#hard");

/** for loop to get all div colors */
let color = Array();
for(cl=1; cl<10; cl++){
    color[cl] = document.querySelector("#color"+[cl]);
    // console.log(color[cl]);
}


function gameInitialized(){
    console.log("Game Initialized");
    /**For loop 9 colors (number of boxes) */
    for(i=1; i<10; i++){
        /** For loop 3 define color (RGB parameters) */
        for(j=0; j<3; j++){
            let red = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let colorful = "rgb("+red+","+blue+","+green+")";
            color[i].style.backgroundColor = colorful;
        }
    }
}