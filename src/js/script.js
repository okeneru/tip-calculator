// Variables
const totalBillInputEl = document.getElementById("total-bill-input")
const totalTipInputEl = document.getElementById("total-tip-input")
const numPeopleEl = document.getElementById("num-people")
const totalCostEl = document.getElementById("total")

let numPeople = Number(numPeopleEl.innerText)

// Functions
function calculate() {
    const bill = Number(totalBillInputEl.value)

    const tip = Number(totalTipInputEl.value) / 100

    const tipAmount = bill * tip

    const totalBill = tipAmount + bill

    const cost = totalBill / numPeople

    totalCostEl.innerText = cost.toFixed(2)
}


function increasePeople() {

  numPeople += 1

  numPeopleEl.innerText = numPeople

  calculate()
}

function decreasePeople() {

  if (numPeople <= 1) {
    return
  }

  numPeople -= 1

  numPeopleEl.innerText = numPeople

  calculate()
}


