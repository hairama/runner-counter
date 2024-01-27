let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let incrementBtn = document.getElementById("increment-btn")

function increment() {
    count += 1
    countEl.textContent = count
    if (count>0){
        incrementBtn.textContent = "ANOTHER RUNNER";
        }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    incrementBtn.textContent = "A RUNNER"
    count = 0
}
