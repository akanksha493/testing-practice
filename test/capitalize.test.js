const capitalize = require("../programs/capitalize");

test("all lowercase", () => {
    expect(capitalize("hello")).toBe("Hello");
});
test("all uppercase", () => {
    expect(capitalize("HELLO")).toBe("Hello");
});
test("mixed uppercase and lowercase", ()=>{
    expect(capitalize("HeLLo")).toBe("Hello");
})