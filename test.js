// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
   
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.26 yen", function() {
    
    const yen = fromDollarToYen(5);

    const expected = (5 / 1.07) * 156.5; 
    
    expect(fromDollarToYen(5)).toBe(expected);
})

test("5000 yen should be 27.81 pounds", function() {
    
    const pounds = fromYenToPound(5000);

    const expected = (5000 / 156.5) * 0.87; 
    
    expect(fromYenToPound(5000)).toBe(expected);
})