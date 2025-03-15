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
 