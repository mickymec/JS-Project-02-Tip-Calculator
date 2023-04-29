

let billInput = document.getElementById('amountInput');
let tipInput = document.getElementById('tipInput');
let totalAmount = document.getElementById('Amount');
let numberOfPeopleDiv = document.getElementById('numberOfPeople');


let numberOfPeople = Number(numberOfPeopleDiv.innerHTML)

const calculateBill = () => {
    const bill = Number(billInput.value)
    const tipPer = Number(tipInput.value)/100
    const tipAmonut = bill * tipPer
    const total = tipAmonut + bill
    const perPersonTotal = total/numberOfPeople
    totalAmount.innerHTML = `${perPersonTotal.toFixed(2).toLocaleString('en-US')}`;
    // console.log("Hello")
}


const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerHTML = numberOfPeople
    calculateBill()
}

const decreasePeople = () => {
    if (numberOfPeople <= 1)
    {
        return
    }

    numberOfPeople -= 1
    numberOfPeopleDiv.innerHTML = numberOfPeople
    calculateBill()
} 


function init() {
    billInput.value = "";
    tipInput.value = "";
}

window.onload = init;