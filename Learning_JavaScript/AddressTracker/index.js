let myAddresses = []

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
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
    myAddresses.push(inputEl.value)
    inputEl.value = ''

    localStorage.setItem("myAddresses", JSON.stringify(myAddresses))

    renderAddresses()

    console.log(localStorage.getItem("myAddresses"))
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
}
