const sumAll = function(num1,num2) {
    let sumOfAll = 0;
    if (num1%1 ===0 && num2%1 ===0 && typeof num1 === 'number' && typeof num2 ==='number'){
        if(0<num1 && num1 < num2){
            for (let i = num1; i <= num2; i++){
                sumOfAll+=i;
            }
            return sumOfAll
        }else if (0<num2 && num2 < num1){
            for (let i = num2; i <= num1; i++){
                sumOfAll+=i
            }
            return sumOfAll
        }else{
            return "ERROR"
        }
    }else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
