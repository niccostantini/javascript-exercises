const sumAll = function(start, end) {

        array = Array.from({length: end}, (_, i) => i + start)
        return array.reduce((a, b) => a + b, 0)


};

// Do not edit below this line
module.exports = sumAll;