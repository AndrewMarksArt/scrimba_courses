// initialize count to be 0
let count = 0

// get the HTML element for the counter that we want to increment
let countEl = document.getElementById("count-el")

// get the HTML element for the previous counts
let prevCounts = document.getElementById("previous-counts")

// listen for clicks on the increment button
function increment() {
    // increment the count variable when the button is clicked
    count = count + 1

    // change the count-el in the HTML to reflect the new count
    countEl.innerText = count
}

// save function for the save button to record number of people
function save() {
    // update the previous-count element
    prevCounts.innerText =  prevCounts.innerText + " - " + count.toString()
    console.log(prevCounts.innerText)

    // reset the main count back to 0
    count = 0
    countEl.innerText = count
}

