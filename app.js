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


const clear = document.querySelector('#clear');

window.onload = function () {
    updateDisplay();
};
one.addEventListener('click', () => {
    displayContent += "1";
    updateDisplay();
});
two.addEventListener('click', () => {
    displayContent += "2";
    updateDisplay();
});
three.addEventListener('click', () => {
    displayContent += "3";
    updateDisplay();
});
four.addEventListener('click', () => {
    displayContent += "4";
    updateDisplay();
});
five.addEventListener('click', () => {
    displayContent += "5";
    updateDisplay();
});
six.addEventListener('click', () => {
    displayContent += "6";
    updateDisplay();
});
seven.addEventListener('click', () => {
    displayContent += "7";
    updateDisplay();
});
eight.addEventListener('click', () => {
    displayContent += "8";
    updateDisplay();
});
nine.addEventListener('click', () => {
    displayContent += "9";
    updateDisplay();
});
zero.addEventListener('click', () => {
    displayContent += "0";
    updateDisplay();
});

decimal.addEventListener('click', () => {
    
    let length = displayContent.length;
    if (length === 0 || displayContent[length - 1] != '.'){
        displayContent += ".";
    }
    updateDisplay();
});

add.addEventListener('click', () => {
    displayContent += "+";
    updateDisplay();
});
subtract.addEventListener('click', () => {
    displayContent += "-";
    updateDisplay();
});
multiply.addEventListener('click', () => {
    displayContent += "*";
    updateDisplay();
});
divide.addEventListener('click', () => {
    displayContent += "/";
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
        displayContent = "0";
        updateDisplay();
    }
    if (displayContent.length <= displayMaxLength) {
        display.textContent = parse(displayContent).join(" ");
    }
};

const compute = (content) => {
    try {
        return math.evaluate(content);
    } catch (exception) {
        return "error";
    }
};

const parse = (content) => {
    const tokenArray = content.split(" ");

    const filteredTokenArray = tokenArray.filter((token) => {
        if ((!(token === '') && !(/\s+/g.test(token)))) {
            return token;
        }
    });

    let mappedTokenArray = filteredTokenArray.map((token) => {
        console.log(token);
        if (isInteger(token)) {
            return parseInt(token);
        }
        if (isFloat(token)) {
            console.log("t:", token);
            return parseFloat(token);
        }
        return token;
    });
    console.log(mappedTokenArray);
    return mappedTokenArray;
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


const parseSymbols = (expression) => {
    const symbolArray = [];
    let acc = "";

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        let prevChar = expression[i - 1];

        if (isInteger(char)) {
            acc += char;
        }

        if (isDecimal(char)) {
            if (!isDecimal(prevChar)) {
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
    return rules_filter(symbolArray);
};






