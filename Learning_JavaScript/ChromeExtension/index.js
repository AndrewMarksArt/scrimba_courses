let myAddresses = ["test", "test", "test"]
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myAddresses.push(inputEl.value)
})

for (let i=0; i<myAddresses.length; i++) {
    ulEL.innerHTML += "<li>" + myAddresses[i] + "</li>"
}