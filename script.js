//all the operator functions

function add(num1, num2) {
    num1 = +num1;
    num2 = +num2;
    return num1+num2
}

function subtract(num1, num2) {
    return num1-num2
}

function multiply(num1, num2) {
    return num1*num2
}

function divide(num1, num2) {
    if(num2!=0){
        return num1/num2
    } else if(num2===0) {
        return "RUDE"
    };
}

function operate(num1, operator, num2) { 
    let result = "";
    switch (operator) {
        case "+": 
            result = add(num1, num2)
            break;
        case "-": 
            result = subtract(num1, num2)
            break;
        case "*":
            result = multiply(num1, num2)
            break;
        case "x":
            result = multiply(num1, num2)
            break;
        case "/":
            result = divide(num1, num2)
            break;
        case "%":
            result = divide(num1, num2)
            break;
    
    } return result;
}

console.log(operate(2, "add", 3));


//makes the time display work

const timeDisplay = document.querySelector("time");
let today = new Date();
let timeMiddleString = (today.getMinutes()<10) ? ":0" : ":";
let hour = (today.getHours()>12) ? (today.getHours()-12) : today.getHours();
let time = hour + timeMiddleString + today.getMinutes();
timeDisplay.textContent = time;

//makes the calculator work

let inputs = document.querySelectorAll(".input");
let upperDisplay = document.querySelector(".upperDisplay");
let lowerDisplay = document.querySelector(".lowerDisplay");
let stringToBeEvaluated = "";
let equalsSign = document.querySelector(".equals");
let clear = document.querySelector(".AC");

let computerLegibleString = "";
let computerLegibleArray = [];

inputs.forEach((input) => {
    input.addEventListener('click', () => {
        if (input.textContent == +input.textContent) {
            stringToBeEvaluated += input.textContent
            computerLegibleString += input.textContent
        } else if (input.textContent == ".") {
            stringToBeEvaluated += input.textContent
            computerLegibleString += input.textContent
        }  else {
            stringToBeEvaluated += " " + input.textContent + " "
            computerLegibleString += "," + input.id + ","
        }
        if (computerLegibleArray[13]) { 
            clearAll();
        } else if (stringToBeEvaluated.length > 20) {
            stringToBeEvaluated = stringToBeEvaluated.slice(0, 20);
        }
        upperDisplay.textContent = stringToBeEvaluated; 
        computerLegibleArray = computerLegibleString.split(","); 
        outputText(computerLegibleArray);
       
    }) 
});

let firstResult;
let secondResult;
let thirdResult;
let fourthResult;
let fifthResult;
let sixthResult;

function outputText(array) {
    console.log("butts" + array);
    if (array[2]) {
        firstResult = Number(operate(array[0], array[1], array[2])).toFixed(2);
        if ((firstResult.toString()).length > 10) {
            firstResult = convertLongNumberstoExponential(+firstResult);
        };
        lowerDisplay.textContent = firstResult;
    };

    if (array[4]) {
        secondResult = operate(firstResult, array[3], array[4])
        lowerDisplay.textContent = Number(operate(firstResult, array[3], array[4])).toFixed(2);
    };

    if (array[6]) {
        thirdResult = operate(secondResult, array[5], array[6])
        lowerDisplay.textContent = Number(operate(secondResult, array[5], array[6])).toFixed(2);
    };

    if (array[8]) {
        fourthResult = operate(thirdResult, array[7], array[8])
        lowerDisplay.textContent = Number(operate(thirdResult, array[7], array[8])).toFixed(2);
    };

    if (array[10]) {
        fifthResult = operate(fourthResult, array[9], array[10])
        lowerDisplay.textContent = Number(operate(fourthResult, array[9], array[10])).toFixed(2);
    };

    if (array[12]) {
        lowerDisplay.textContent = Number(operate(fifthResult, array[11], array[12])).toFixed(2);
}};


/*equalsSign.addEventListener('click', () => {
  

    if (computerLegibleArray[10]) {
       firstResult = operate(computerLegibleArray[0], computerLegibleArray[1], computerLegibleArray[2]);
       secondResult = operate(firstResult, computerLegibleArray[3], computerLegibleArray[4]);
       thirdResult = operate(secondResult, computerLegibleArray[5], computerLegibleArray[6]);
       fourthResult = operate(thirdResult, computerLegibleArray[7], computerLegibleArray[8]);
       lowerDisplay.textContent = Number(operate(fourthResult, computerLegibleArray[9], computerLegibleArray[10])).toFixed(2);

    } else if (computerLegibleArray[8]) {
       firstResult = operate(computerLegibleArray[0], computerLegibleArray[1], computerLegibleArray[2]);
       secondResult = operate(firstResult, computerLegibleArray[3], computerLegibleArray[4]);
       thirdResult = operate(secondResult, computerLegibleArray[5], computerLegibleArray[6]);
       lowerDisplay.textContent = Number(operate(thirdResult, computerLegibleArray[7], computerLegibleArray[8])).toFixed(2);

    } else if (computerLegibleArray[6]) {
        firstResult = operate(computerLegibleArray[0], computerLegibleArray[1], computerLegibleArray[2]);
        secondResult = operate(firstResult, computerLegibleArray[3], computerLegibleArray[4]);
        console.log(secondResult);
        lowerDisplay.textContent = Number(operate(secondResult, computerLegibleArray[5], computerLegibleArray[6])).toFixed(2);

    } else if (computerLegibleArray[4]) {
        firstResult = operate(computerLegibleArray[0], computerLegibleArray[1], computerLegibleArray[2]);
        lowerDisplay.textContent = Number(operate(firstResult, computerLegibleArray[3], computerLegibleArray[4])).toFixed(2);

    } else if (computerLegibleArray[2]) {
        lowerDisplay.textContent = (+operate(computerLegibleArray[0], computerLegibleArray[1], computerLegibleArray[2])).toFixed(2);
    } else {
        lowerDisplay.textContent = "ERROR"
    }
});*/


clear.addEventListener('click', () => {
    clearAll();
});

function clearAll () {
    computerLegibleString = "";
    computerLegibleArray = [];
    upperDisplay.textContent = "";
    lowerDisplay.textContent = "";
    stringToBeEvaluated = "";
    firstResult = "";
    secondResult = "";
    thirdResult = "";
    fourthResult = "";
    fifthResult = "";
    sixthResult = "";
};

function convertLongNumberstoExponential (number) {
    number = number.toExponential(2);
    console.log(number);
    return number;
};


// enables keyboard support

document.addEventListener('keydown', takeUserInput);

function takeUserInput(e) {
    if (+`${e.key}` == `${e.key}`) {
        stringToBeEvaluated += `${e.key}`
        computerLegibleString += `${e.key}`

    } else if (
        `${e.key}` == "+" ||
        `${e.key}` == "-" ||
        `${e.key}` == "x" ||
        `${e.key}` == "*" ||
        `${e.key}` == "/" ||
        `${e.key}` == "%") {
            stringToBeEvaluated += " " + `${e.key}` + " "
            computerLegibleString += "," + `${e.key}` + ","
    } else if (`${e.key}` == "Backspace"){
            stringToBeEvaluated = stringToBeEvaluated.slice(0, -1);
            computerLegibleString = computerLegibleString.slice(0, -1);
            computerLegibleArray.pop();
    } else if (`${e.key}` == ".") {
        stringToBeEvaluated += `${e.key}`
        computerLegibleString += `${e.key}`
    }
    if (!computerLegibleArray[2]) {
        lowerDisplay.textContent = "";
    }
    if (computerLegibleArray[13]) { 
        clearAll();
    } else if (stringToBeEvaluated.length > 20) {
        stringToBeEvaluated = stringToBeEvaluated.slice(0, 20);
    }

    upperDisplay.textContent = stringToBeEvaluated; 
    computerLegibleArray = computerLegibleString.split(","); 
    outputText(computerLegibleArray);
    console.log(computerLegibleArray);
};

