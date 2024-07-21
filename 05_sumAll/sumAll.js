const sumAll = function(start, end) {

    const checkStart = !(typeof start === 'number');
    const checkEnd = !(typeof end === 'number');

    if (checkStart || checkEnd) {return 'ERROR'}
    else if (start >= 0 && end >= 0){
            if (start > end) {
                let temp = start;
                start = end;
                end = temp;
            }

            array = Array.from({length: end}, (_, i) => i + start)
            return array.reduce((a, b) => a + b, 0)
        } else {return 'ERROR'}

};

// Do not edit below this line
module.exports = sumAll;