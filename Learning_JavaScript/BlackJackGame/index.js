
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")
let cards = []
let dealerCards = []
let dealerSumEl = document.getElementById("dealer-sum-el")
let dealerCardsEl = document.getElementById("dealer-cards-el")

let player = {
    name: "Andrew",
    chips: 100
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    dealerSum = 0
    let dealerFirstCard = getRandomCard()
    let dealerSecondCard = getRandomCard()
    dealerCards = [dealerFirstCard, dealerSecondCard]
    dealerSum = dealerCards[0] + dealerCards[1]

    hasBlackJack = false
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
    dealerSetup()
}

function dealerSetup() {
    dealerCardsEl.textContent = "Dealers Cards: " + dealerCards[0]
}

function renderGame() {
    cardsEl.textContent = "Your Cards: "

    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
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
        dealerCardsEl.textContent = "Dealers Cards: "
        for ( let i=0; i<dealerCards.length; i++) {
            dealerCardsEl.textContent += cards[i] + " "
        }

        dealerSumEl.textContent = "Dealers Total: " + dealerSum
    }

    messageEl.textContent = message
}

function hit() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}
