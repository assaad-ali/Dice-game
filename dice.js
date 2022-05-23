/********************* Functions /**********************/
function getRandomNumber(){
    let ran = Math.floor(Math.random() * 6) + 1
}
function throwFirstDice(){

    
}

function throwSecondDice(){
    
}

function displayResult(){
    
}

/********************* Initliaze dice game /**********************/

function intiDice(){

    // displayStartGameMessage()
    throwFirstDice()
    throwSecondDice()
    displayResult()
}

window.onload = function(){

    initDice()
}