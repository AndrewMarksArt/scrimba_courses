// initialize count to be 0
let count = 0

// get the HTML element for the counter that we want to increment
let countEl = document.getElementById("count-el")

// listen for clicks on the increment button
function increment() {
    // increment the count variable when the button is clicked
    count = count + 1

    // change the count-el in the HTML to reflect the new count
    countEl.innerText = count
}


