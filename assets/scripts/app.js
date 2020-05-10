const defaultResult = 0;
let currentResult = defaultResult;  
let logEntries;

//get user input number
function getUserNumberInput() {
    return parseInt(userInput.value);
}

//Generates and writes the calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor.js
}

function add() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNum;
    createAndWriteOutput('+', initialResult, enteredNum);
    logEntries = [enteredNum];
    console.log(logEntries.value);
}

function subtract() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNum;
    createAndWriteOutput('-', initialResult, enteredNum);
}

function multiply() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNum;
    createAndWriteOutput('*', initialResult, enteredNum);
}

function divide() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNum;
    createAndWriteOutput('/', initialResult, enteredNum);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);