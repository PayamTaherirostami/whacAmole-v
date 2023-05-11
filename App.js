const squares = document.querySelectorAll(".square")
const mole = document.querySelector('mole')
const timeLeft = document.querySelector('#timeLeft')
const score = document.querySelector('#score')

let result = 0
let currentTime = 60
let myChoice

const val = document.querySelector('#title')

let num = 1050

function start() {

    result = 0
    score.textContent = result
    currentTime = 60

    if (val.value == "Easy"){
        num = 1050
    }
    if (val.value == "Medium"){
        num = 950
    }
    if (val.value == "Difficult"){
        num = 600
    }
    moveMole()
}
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')
    myChoice = randomSquare.id
    
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == myChoice) {
            result++
            score.textContent = result
            myChoice = null
        }
    })
})


function moveMole() {

      // let timeId = null
    timeId = setInterval(randomSquare, num)
  
}

moveMole()
function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timeId)
        alert(`Game over, your final score is: ${result}`)
    }
}

let countDownTimerId = setInterval(countDown,1000)

