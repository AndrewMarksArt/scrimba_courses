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

    console.log(temp)

    myAddresses.push(temp)

    localStorage.setItem("myAddresses", JSON.stringify(myAddresses))

    renderAddresses()

    // console.log(localStorage.getItem("myAddresses"))
    console.log(myAddresses[myAddresses.length-1]["title"])
})

function renderAddresses() {
    let listItems = ""
    for (let i=0; i<myAddresses.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myAddresses[i]}'>
                    ${myAddresses[i]}
                </a>
            </li>
        `
    }
    ulEL.innerHTML = listItems

    let newRow = addressTable.insertRow(addressTable.rows.length)
    let testHTML = `
        <td>test title</td>
        <td>test note</td>
        <td><a target='_blank' href=''>details</a></td>
    `
    newRow.innerHTML = testHTML
}
