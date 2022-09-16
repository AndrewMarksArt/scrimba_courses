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

function startGame() {
    cardsEl.textContent = "Your Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Total: " + sum

    // if else logic
    if (sum <= 20) {
        message = "Do you want another card"
    } else if (sum === 21) {
        message = "Congrats you have Black Jack!"
        hasBlackJack = true
    } else {
        message = "Sorry hand is bust, you lose."
        isAlive = false
    }

    messageEl.textContent = message
}

function hit() {
    let newCard = getRandomCard()
    cardsEl.textContent = "Your Cards: " + firstCard + " " + secondCard + " " + newCard
    let newSum = newCard + sum
    sumEl.textContent = "Total: " + newSum
}

