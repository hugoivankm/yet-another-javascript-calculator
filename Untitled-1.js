
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