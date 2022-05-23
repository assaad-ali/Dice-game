/********************* Global Variables /**********************/
var firstDice
var secondDice

/********************* Functions /**********************/
function getRandomNumber(){
    let ran = Math.floor(Math.random() * 6) + 1
    return ran
}
function throwFirstDice(){

    firstDice = getRandomNumber()
    setImage1(firstDice)
}

function throwSecondDice(){

    secondDice = getRandomNumber()
    setImage2(secondDice)
}

function displayResult(){
    
}

/********************* Initliaze dice game /**********************/

function initDice(){

    // displayStartGameMessage()
    throwFirstDice()
    throwSecondDice()
    displayResult()
}

window.onload = function(){

    initDice()
}