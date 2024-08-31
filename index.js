let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 1

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let prevEntry = count + " – "
    saveEl.textContent += prevEntry
    console.log(count)
    countEl.textContent = 1
    count = 1
}
 



//let welcomeEl = document.getElementById("welcome-el")

//let name = "Gino"
//let greeting = "Welcome back, "

//welcomeEl.innerText = greeting + name

//welcomeEl.innerText += "! 👋"

//let myGreeting = greeting + name
//console.log(myGreeting) 

//console.log(4+5) //9
//console.log("2" + "4") //24
//console.log("5" + 1) //51
//console.log(100 + "100") //200 wrong!


//let username = "Gino"

//let message = "You have three new notifications"


//let messageToUser = message + ", " + username +"!"
//console.log(messageToUser)


//const incButton = document.querySelector(".increment-btn");


//incButton.addEventListener("click", increment);








//let lapsCompleted = 0

//function lapIncrement() {
//    lapsCompleted = lapsCompleted + 1
//}

//lapIncrement()
//lapIncrement()
//lapIncrement()

//console.log(lapsCompleted)



// document.getElementById("count").innerText = 5

// function increment() {
    
// }
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

//function totalTime() {
 //   console.log(lap1+lap2+lap3)
    
//}

// totalTime()




// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = 100
// console.log(bonusPoints)
// bonusPoints = 25
// console.log(bonusPoints)
// bonusPoints = 70
// console.log(bonusPoints)



// let myAge = 59
// let humanDogRatio = 7
// let myDogAge = myAge*humanDogRatio
// // console.log(myDogAge)