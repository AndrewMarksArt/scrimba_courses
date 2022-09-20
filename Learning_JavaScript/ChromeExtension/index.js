let myAddresses = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myAddresses.push(inputEl.value)
    renderAddresses()
})

function renderAddresses() {
    let listItems = ""
    for (let i=0; i<myAddresses.length; i++) {
        listItems += "<li>" + myAddresses[i] + "</li>"
    }
    ulEL.innerHTML = listItems
}
