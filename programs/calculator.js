function Calculator(){
    const add = (a,b) => a+b;
    const subtract = (a,b) => a-b;
    const multiply = (a,b) => a*b;
    const divide = (a,b) => b===0?NaN :a/b;

    return {add,
            subtract,
            multiply,
            divide};
}

const calcObj = new Calculator;

module.exports = calcObj;