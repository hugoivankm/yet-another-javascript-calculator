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
    displayContent += ".";
    updateDisplay();
});

add.addEventListener('click', () => {
    displayContent += " + ";
    updateDisplay();
});
subtract.addEventListener('click', () => {
    displayContent += " - ";
    updateDisplay();
});
multiply.addEventListener('click', () => {
    displayContent += " * ";
    updateDisplay();
});
divide.addEventListener('click', () => {
    displayContent += " / ";
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
        console.log(parse(displayContent));
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
        let value = Number(token);
        if (Number.isInteger(value)) {
            return parseInt(token);
        }
        if (isFloat(value)) {
            return parseFloat(token);
        }
        return token;
    });
    return mappedTokenArray;
};

const isFloat = (value) => {
    return (/^[0-9]?[.][0-9]+$/g.test(value));
};


