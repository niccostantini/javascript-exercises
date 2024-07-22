const palindromes = function (string) {
    string = string.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g , "");
    let newString = string.split('').reverse().join('');
    return string === newString
};

// Do not edit below this line
module.exports = palindromes;
