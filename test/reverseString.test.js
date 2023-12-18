const reverseString = require("../programs/reverseString");

test("reverse word", ()=>{
    expect(reverseString("Hello")).toBe("olleH");
});

test("reverse sentence", () => {
    expect(reverseString("This is a sentence")).toBe("ecnetnes a si sihT");
})
