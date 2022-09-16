function getRandomCard() {
    return Math.floor(Math.random()*10)+2
}

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let isAlive = true
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")

let cards = [firstCard, secondCard]

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Your Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Total: " + sum

    // if else logic
    if (sum <= 20) {
        message = "Do you want another card?"
    } else if (sum === 21) {
        message = "Congrats you have Black Jack!"
        hasBlackJack = true
    } else {
        message = "Sorry, busted you lose."
        isAlive = false
    }

    messageEl.textContent = message
}

function hit() {
    let newCard = getRandomCard()
    sum += newCard
    renderGame()
}

