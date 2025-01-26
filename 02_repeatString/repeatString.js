const repeatString = function(string, num) {
    let returnedString = string;
    
    for(let i = 1; i < num; i++) {
        returnedString = returnedString + string;
    };

    return returnedString;
};

// Do not edit below this line
module.exports = repeatString;
