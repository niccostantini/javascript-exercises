const reverseString = function(string) {
    let length = string.length;
    let newString = "";
    let character = "";
    for (let i = 0; i < length; i++) {
        character = string.charAt(i);
        newString = character.concat(newString);
    }
    console.log(character);
    console.log(string, length);
    console.log(newString);
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
