const defaultResult = 0;
let currentResult = defaultResult;  
let logEntries = [];

//get user input number
function getUserNumberInput() {
    return parseInt(userInput.value);
}

//Generates and writes the calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor.js
}

function nothing(){}

function writeToLog(operationIdentifier, previousResult, enterednumber, finalResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: previousResult,
        number: enterednumber,
        result: finalResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

function add() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNum;
    createAndWriteOutput('+', initialResult, enteredNum);
    writeToLog("ADD", initialResult, enteredNum, currentResult);
}

function subtract() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNum;
    createAndWriteOutput('-', initialResult, enteredNum);
    writeToLog("SUBTRACT", initialResult, enteredNum, currentResult);
}

function multiply() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNum;
    createAndWriteOutput('*', initialResult, enteredNum);
    writeToLog("MULTIPLY", initialResult, enteredNum, currentResult);
}

function divide() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNum;
    createAndWriteOutput('/', initialResult, enteredNum);
    writeToLog("DIVIDE", initialResult, enteredNum, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);