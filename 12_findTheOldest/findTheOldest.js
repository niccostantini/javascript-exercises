const findTheOldest = function(obj) {
    obj.map(function(item) {
        if(!item.yearOfDeath) {item.yearOfDeath = 2024}
    })
    sorted = obj.sort((a, b) => (a.yearOfBirth - a.yearOfDeath) < (b.yearOfBirth - b.yearOfDeath) ? -1 : +1)
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
