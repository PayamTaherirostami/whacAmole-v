const squares = document.querySelectorAll(".square")
const mole = document.querySelector('mole')
const timeLeft = document.querySelector('#timeLeft')
const score = document.querySelector('#score')

let result = 0
let currentTime = 60
let myChoice
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
    timeId = setInterval(randomSquare,500)
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

function start() {
     result = 0
     score.textContent = result
     currentTime = 60
     moveMole()
}