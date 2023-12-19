function encrypt(char, key){
    const charCode = char.charCodeAt()-65;
    const newCharCode = (charCode + key)%26;
    return String.fromCharCode(newCharCode+65);
}
function caesarCipher(string, key = 3){
    return string.toUpperCase()
        .split("")
        .map(char => /[A-Z]/.test(char) ? encrypt(char, key):char)
        .join("");
}

module.exports = caesarCipher;