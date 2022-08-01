
let parsedTokenArray = tokenArray.map((token) => {
    let value = Number(token);

    if (Number.isInteger(value)) {
        return parseInt(token);
    }
    if (isFloat(value)) {
        return parseFloat(token);
    }
});

let tokenToSymbol = (token) => {
    let expression = "";
    if(!isNaN(token)){

    }
    let complete = false;
    
}



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

['two', { element: two, label: '1' }],
    ['three', { element: three, label: '1' }],
    ['four', { element: four, label: '1' }],
    ['five', { element: one, fiveabel: '1' }],
    ['six', { element: six, label: '1' }],
    ['seven', { element: seven, label: '1' }],
    ['eight', { element: eight, label: '1' }],
    ['nine', { element: nine, label: '1' }],
    ['zero', { element: zero, label: '1' }],
    ['decimal', { element: decimal, label: '1' }],
    ['add', { element: add, label: '1' }],
    ['subtract', { element: subtract, label: '1' }],
    ['multiply', { element: multiply, label: '1' }],
    ['divide', { element: divide, label: '1' }],