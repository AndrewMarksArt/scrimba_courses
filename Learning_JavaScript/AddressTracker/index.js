let myAddresses = []
let rowItems = ""

const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")

const titleEl = document.getElementById("title-el")
const urlEl = document.getElementById("url-el")
const addressEl = document.getElementById("address-el")
const notesEl = document.getElementById("notes-el")

const addressTable = document.getElementById("saved-addresses-el").getElementsByTagName('tbody')[0]
const ulEL = document.getElementById("ul-el")

const addressesFromLocal = JSON.parse(localStorage.getItem("myAddresses"))
// check if localStorage has anything
// if there is localStorage, set myAddresses to what is there then render out
if (addressesFromLocal) {
    console.log("there are addresses saved in local storage")
    myAddresses = addressesFromLocal
    loadAddresses()
} else {
    console.log("nothing here")
}

deleteBtn.addEventListener("dblclick", function() {
    console.log("clear btn clicked!")
})

saveBtn.addEventListener("click", function () {
    if (
        titleEl.value == null || titleEl.value == "",
        addressEl.value == null || addressEl.value == "",
        urlEl.value == null || urlEl.value == "",
        notesEl.value == null || notesEl.value == "") {
            console.log("missing required inputs.")
            alert("Please enter input for Title, Address, URL, and Notes before saving.")
    } else {
        let temp = {}
        temp["title"] = titleEl.value
        temp["address"] = addressEl.value
        temp["url"] = urlEl.value
        temp["note"] = notesEl.value

        myAddresses.push(temp)
        localStorage.setItem("myAddresses", JSON.stringify(myAddresses))

        renderAddresses()

        titleEl.value = ""
        addressEl.value = ""
        urlEl.value = ""
        notesEl.value = ""
    }
})

function loadAddresses() {
    
    for (let i=0; i<myAddresses.length; i++) {
        let newRow = addressTable.insertRow(addressTable.rows.length)
        rowItems = `
        <td>${myAddresses[i]["title"]}</td>
        <td>${myAddresses[i]["note"]}</td>
        <td style="text-align: right"><a target='_blank' href='${myAddresses[i]["url"]}'>expand</a></td>
        `
        newRow.innerHTML = rowItems
    }
    
}

function renderAddresses() {
    let last = myAddresses.length - 1
    
    let newRow = addressTable.insertRow(addressTable.rows.length)
    rowItems = `
        <td>${myAddresses[last]["title"]}</td>
        <td>${myAddresses[last]["note"]}</td>
        <td style="text-align: right"><a target='_blank' href='${myAddresses[last]["url"]}'>expand</a></td>
    `
    newRow.innerHTML = rowItems
    
}
