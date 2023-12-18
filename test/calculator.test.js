const calculator = require("../programs/calculator");

test("addition of two numbers", () => {
    expect(calculator.add(1,2)).toBe(3);
});
test("subtraction of two numbers", () => {
    expect(calculator.subtract(1,2)).toBe(-1);
})
test("multiple of two numbers", () => {
    expect(calculator.multiply(1,2)).toBe(2);
});
test("multiply two negatives", () => {
    expect(calculator.multiply(-3,-2)).toBe(6);
})
test("divide two numbers", () => {
    expect(calculator.divide(1,2)).toBe(0.5);
})
test("divide by zero", () =>{
    expect(calculator.divide(4,0)).toBe(NaN);
})
