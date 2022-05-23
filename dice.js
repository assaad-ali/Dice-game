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

function setImage1(diceNumber){
    const diceImage1 = "images/dice" + diceNumber +".png"
    document.getElementById("dice1").setAttribute("src", diceImage1)
    
}
function setImage2(diceNumber){
    const diceImage2 = "images/dice" + diceNumber +".png"
    document.getElementById("dice2").setAttribute("src", diceImage2)
    
}

function displayResult(){

    let resultMessage = ""
    if(firstDice > secondDice){
        resultMessage = "Player 1 wins!"
    }
    else if( secondDice > firstDice){
        resultMessage = "Player 2 wins!"
    }
    else{
        resultMessage = "Draw!"
    }
    console.log(resultMessage)
    document.getElementById("message").innerText = resultMessage
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