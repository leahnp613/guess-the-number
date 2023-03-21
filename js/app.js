/*----------------------------Constants--------------------------------*/



/*----------------------------Variables------------------------------*/

let secretNum, guessList, isWinner

/*---------------------------Cached Element References-----------------*/

const form = document.querySelector("form")
const guessInput = document.querySelector("#guess-input")
const guessesEl = document.querySelector("#prev-guesses")
const messageEl = document.querySelector("#reset-button")
const prevGuessMsg = document.querySelector("#prev-guesses-msg")

/*--------------------------Event Listeners----------------------------*/
form.addEventListener("reset", init)
form.addEventListener("submit", function (evt){
    evt. preventDefault()
    if (isWinner === false){
        checkGuess(parseInt(guessInput.value))
    }
})

/*-------------------------Functions------------------------------------*/
init();

function init(){
    guessesEl.innerText=""
    messageEl.innerText= "Please enter a number from 1 to 100"
    resetBtn.setAttribute("hidden", true)
    prevGuessMsg.innerText= ""
    guessList =[]
    isWinner = false
    secretNum = Math.floor(Math.random() *100 +1)
}

function checkGuess(guess) {
    guessInput.value =""
    if (isNaN (guess) || guess > 100) {    
    } else if (guess ===secretNum) {
    
    }guessList.push(guess)
}

