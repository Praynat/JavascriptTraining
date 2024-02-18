const plusButton = document.getElementById("+Btn");

const minusButton = document.getElementById("-Btn");

const resetButton = document.getElementById("resetButton");


plusButton.addEventListener("click", increaseNum);

minusButton.addEventListener("click", decreaseNum);

resetButton.addEventListener("click", resetNum);

let Count=0;

function increaseNum() {
    Count++;
    document.getElementById("theNumber").innerText=Count;
}

function decreaseNum() {
    Count--;
    document.getElementById("theNumber").innerText=Count;
}

function resetNum() {
    document.getElementById("theNumber").innerText="0";
    Count=0;
}