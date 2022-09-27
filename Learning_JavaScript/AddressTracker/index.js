let myAddresses = []

const inputBtn = document.getElementById("input-btn")

const titleEl = document.getElementById("title-el")
const urlEl = document.getElementById("url-el")
const addressEl = document.getElementById("address-el")
const notesEl = document.getElementById("notes-el")

const addressTable = document.getElementById("saved-addresses-el").getElementsByTagName('tbody')[0]
const ulEL = document.getElementById("ul-el")

let addressesFromLocal = JSON.parse(localStorage.getItem("myAddresses"))
// check if localStorage has anything
// if there is localStorage, set myAddresses to what is there then render out
if (addressesFromLocal) {
    console.log("there are addresses saved in local storage")
    myAddresses = addressesFromLocal
    renderAddresses()
} else {
    console.log("nothing here")
}

inputBtn.addEventListener("click", function () {
    let temp = {}
    temp["title"] = titleEl.value
    temp["address"] = addressEl.value
    temp["url"] = urlEl.value
    temp["note"] = notesEl.value

    myAddresses.push(temp)
    localStorage.setItem("myAddresses", JSON.stringify(myAddresses))

    renderAddresses()

    titleEl.textContent = ''
})

function renderAddresses() {
    let rowItems = ""
    
    for (let i=0; i<myAddresses.length; i++) {
        let newRow = addressTable.insertRow(addressTable.rows.length)
        rowItems = `
        <td>${myAddresses[i]["title"]}</td>
        <td>${myAddresses[i]["note"]}</td>
        <td><a target='_blank' href=''>${myAddresses[i]["url"]}</a></td>
        `
        newRow.innerHTML = rowItems

    }
    
}
