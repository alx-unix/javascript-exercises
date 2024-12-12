const reverseString = function(word) {
    result="";
    if ( word.length === 0){
        return result
    }
    for (let i=-1; i >= -(word.length); i--){
        result += word.at(i)
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
