let displayContent = '';
const displayMaxLength = 24;

const display = document.querySelector('#display');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

const equals = document.querySelector('#equals');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const decimal = document.querySelector('#decimal');
const clear = document.querySelector('#clear');


let inputMap = new Map([
    [one, '1'],
    [two, '2'],
    [three, '3'],
    [four, '4'],
    [five, '5'],
    [six, '6'],
    [seven, '7'],
    [eight, '8'],
    [nine, '9'],
    [zero, '0'],
    [add, '+'],
    [subtract, '-'],
    [divide, '/'],
    [multiply, '*'],
]);


for (let entry of inputMap) {

    const [key, value] = entry;
    key.addEventListener('click', () => {
        if (displayContent === '0') {
            displayContent = '';
        }
        displayContent += value;
        updateDisplay();
    });
}


decimal.addEventListener('click', () => {
    let length = displayContent.length;
    if (length === 0 || displayContent[length - 1] != '.') {
        displayContent += ".";
    }
    updateDisplay();
});

equals.addEventListener('click', () => {
    const result = compute(displayContent);
    displayContent = result.toString();
    updateDisplay();
});

clear.addEventListener('click', () => {
    displayContent = '';
    updateDisplay();
});

const updateDisplay = () => {
    if (displayContent === "") {
        displayContent = '0';
        updateDisplay();
    }
    if (displayContent.length <= displayMaxLength) {
        displayContent = parse(displayContent).join("");
        display.textContent = displayContent;
    }
};

window.onload = function () {
    updateDisplay();
};

const compute = (content) => {
    try {
        return math.evaluate(content);
    } catch (exception) {
        displayContent = '';
        display.textContent = 'E';
    }
};

const isFloat = (token) => {
    return (/^[0-9]?[.][0-9]+$/g.test(token));
};
const isInteger = (token) => {
    return (/^[0-9]+$/g.test(token));
};
const isDecimal = (token) => {
    return (/^[.]$/g.test(token));
};

const isOperand = (token) => {
    return (/^[\-\+\*\/]$/g.test(token));
}

const rules_filter = (tokenArray) => {
    tokenArray = tokenArray.reverse();
    let resultArray = tokenArray.filter((token, index) => {
        let prevToken = (index !== 0) ? tokenArray[index - 1] : '';
        if (token === '') {
            return false;
        }
        if (isOperand(token)) {
            if (isOperand(prevToken)) {
                return false;
            }
            return true;
        }
        return true;
    });
    return resultArray.reverse();
};


const parse = (expression) => {
    const symbolArray = [];
    let acc = "";

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        let prevChar = expression[i - 1];

        if (isInteger(char)) {
            acc += char;
        }

        if (isDecimal(char)) {
            let accStr = acc.split("");

            let hasPreviousDecimal = accStr.some((element, index) => accStr.lastIndexOf(element) != index);

            if (!hasPreviousDecimal) {
                acc += char;
            }
        }

        if (isOperand(char)) {
            if (acc !== "") {
                symbolArray.push(acc);
            }
            acc = '';
            acc += char;


            symbolArray.push(acc);
            acc = '';
        }

        if (i == (expression.length - 1)) {
            symbolArray.push(acc);
            acc = "";
        }
    }
    console.log(symbolArray);
    return rules_filter(symbolArray);
};






