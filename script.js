const btn = document.getElementById("BTN")
const counter = document.getElementById("counter")


function increase(){
  let counterValue = parseInt(counter.textContent)
  counterValue += 1
  counter.textContent = counterValue
}
