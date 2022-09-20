let myAddresses = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")

inputBtn.addEventListener("click", function () {
    myAddresses.push(inputEl.value)
    console.log(myAddresses)
})