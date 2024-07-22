/* PSEUDOCODING
* INPUT = n
* INITIALISE ARRAY
* GENERATE FIBONACCI (FOR)
* * PUSH ALL GENERATED VALUES INTO THE ARRAY
* RETURN THE LAST ELEMENT OF THE ARRAY
*/

const fibonacci = function(n) {

if (n == 0) return 0
else if (n < 0) return 'OOPS'
else {
    let array = [1];
    let fn1 = 0;
    let fn2 = 1;
    n = parseInt(n);
    for (i = 0; i < n-1; i++) {
    
        let nextFibonacci = fn1 + fn2;
        fn1 = fn2;
        fn2 = nextFibonacci;
        array.push(nextFibonacci);
    
    }

    return array[(array.length-1)];
}
};

// Do not edit below this line
module.exports = fibonacci;
