const repeatString = function(word,times) {
    let result="";
    let i=0;
    if (times === 0){
        return result;
    }
    if(times < 0){
        return 'ERROR'
    }

    while(i<times){
        result+=word;
        i++;
    }
    return result

};

// Do not edit below this line
module.exports = repeatString;
