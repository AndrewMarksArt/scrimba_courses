
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")
let cards = []

function getRandomCard() {
    return Math.floor(Math.random()*10)+2
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
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
    

