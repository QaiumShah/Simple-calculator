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

function calculateResult(calculationType){
    const enteredNum = getUserNumberInput();
    if (
        calculationType !== 'ADD' && 
        calculationType !== 'SUBTRACT' && 
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNum
    ){
        return;    
    }

    /* if (
        calculationType === 'ADD' ||
        calculationType === 'SUBTRACT' ||
        calculationType === 'MULTIPLY' ||
        calculationType === 'DIVIDE'
    ){ */
        

    const initialResult = currentResult;
    let mathOperator
    if(calculationType === 'ADD'){
        currentResult += enteredNum;
        mathOperator = '+';
    }  else if (calculationType ==='SUBTRACT') {
        currentResult -= enteredNum;
        mathOperator = '-';
    }else if (calculationType ==='MULTIPLY') {
        currentResult *= enteredNum;
        mathOperator = '*';
    }else if (calculationType ==='DIVIDE') {
        currentResult /= enteredNum;
        mathOperator = '/';
    }
//}
    
    
    createAndWriteOutput(mathOperator, initialResult, enteredNum);
    writeToLog(calculationType, initialResult, enteredNum, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);