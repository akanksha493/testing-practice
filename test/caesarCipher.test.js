const caesarCipher  = require('../programs/caesarCipher');

test("a to z", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 3)).toBe("DEFGHIJKLMNOPQRSTUVWXYZABC");
});
test("mixed case", () => {
    expect(caesarCipher("acBEy", 5)).toBe("FHGJD");
});
test("with punctuations", () => {
    expect(caesarCipher("acBEy.tgtu!,?e", 5)).toBe("FHGJD.YLYZ!,?J");
});