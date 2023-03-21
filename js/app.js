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
    render()
}
function render(){
    const lastGuess = guessList[guessList.length -1]
    const div = document.createElement("div")
    div.innerText = lastGuess
    
    if (guessList.length ===1){
        prevGuessMsg.innerText = "Previous Guesses:"
        resetBtn.removeAttribute("hidden")
    }
    if (isWinner){
        renderWin(div)
    }else if (lastGuess > secretNum || lastGuess <secretNum){
        renderGuess(div, lastGuess)
    }
}



function renderError(error){
    messageEl.className = "error"
    messageEl.innerText = error
}

function renderWin (div){
    messageEl.className = "winner"
    div.className = "winner"
    guessesEl.appendChild(div) 
    if (guessList.length === 1 ){
        messageEl.innerText = 'You found the number in one guess!'
    }else{
        messageEl.innerText ='Congratulations! You found the number ${secretNum} in ${guess.length} guesses!'
    }
    }


function checkGuess(guess) {
    guessInput.value =""
    if (isNaN (guess) || guess > 100) {    
        renderError("Whoops! Please enter a number from 1 to 100.")
        return
    } else if (guess ===secretNum) {
      isWinner = true
    }guessList.push(guess)
    render()
}

