const screen = document.querySelector(".screen");
const nums = document.querySelectorAll(".nums");
const process = document.querySelectorAll(".process");
const calculate = document.querySelector(".calculate");
const clearScreenDiv = document.querySelector(".clearScreen");

let num1 = 0;
let num2 = 0;
let processOperator = "";
let clearScreen = false;

const Calculate = (num1, num2, operator) => {
    let result = 0;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    ShowResult(result);
}

const AddScreen = (num) => {
    if (screen.textContent == 0 || clearScreen) {
        screen.textContent = "";
        clearScreen = false;
    }
    screen.textContent += parseFloat(num.textContent);
}

const ShowResult = (result) => {
    screen.textContent = result;
}

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", () => { AddScreen(nums[i]) })
}

process.forEach(item => {
    item.addEventListener("click", () => {
        num1 = parseFloat(screen.textContent);
        clearScreen = true;
        processOperator = item.textContent;
    })
});

calculate.onclick = function() {
    num2 = parseFloat(screen.textContent);
    Calculate(num1 , num2 , processOperator);
}

clearScreenDiv.onclick = () => {
    screen.textContent = "0";
}