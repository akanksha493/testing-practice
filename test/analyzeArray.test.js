const analyzeArray  = require('../programs/analyzeArray');


test("normal array 1", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});
test("normal array 2", () => {
    expect(analyzeArray([5,3,8,3,5,2,7])).toEqual({
        average: 4.71,
        min: 2,
        max: 8,
        length: 7
      });
});
test("empty array", () => {
    expect(analyzeArray([])).toBeNull();
});