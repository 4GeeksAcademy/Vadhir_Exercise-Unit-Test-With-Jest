// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

let unEuro = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

function fromDollarToYen(dollar) {
    return (dollar / unEuro.USD) * unEuro.JPY;
}

function fromYenToPound(yen) {
    return (yen / unEuro.JPY) * unEuro.GBP;
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }