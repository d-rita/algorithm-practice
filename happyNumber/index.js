let isNumberHappy = function(n){
    let done = false;
    let isHappy = false;
    let sumStack = [];
    

    while(!done){
        let squareSum = 0;
        let numArr = [];
        if(n === 1){
            isHappy = true;
            done = true
        } else {
            if(sumStack.includes(n)){
                isHappy =false;
                done = true;
            } else {
                sumStack.push(n);
                numArr = n.toString().split('');
                for(let i=0; i<numArr.length; i++){
                    squareSum += parseInt(numArr[i])**2;
                }
                n = squareSum;
            }  
        }
    }
    return isHappy;
}

let num = 19
console.log(isNumberHappy(num));
