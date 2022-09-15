// exercise 1
let firstName = "Andrew"
let lastName = "Marks"

function getFullName() {
    let fullName = firstName + " " + lastName
    console.log(fullName)
}


// exercise 2
let points = 0

function add3Points() {
    points += 3
}

function remove1Point() {
    points -= 1
}


// exercis 1 output
getFullName()

// exercise 2 output
console.log(points)
add3Points()
console.log(points)
remove1Point()
console.log(points)


// exercise 3
// Try to predict what each of the lines will log out
console.log("2" + 2) // --> 22
console.log(11 + 7) // --> 18
console.log(6 + "5") // --> 65
console.log("My points: " + 5 + 9) // --> My points: 59
console.log(2 + 2) // --> 4
console.log("11" + "14") // --> 1114
