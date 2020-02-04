let findRange = function(num){
    // split number into array
    // minValue = 1
    // maxValue = 9
    // first element in array determines the weight of the number
    let maxNumber, minNumber, finalResult; 
    let numArray = num.toString().split('').map(Number);
    

    //find possible maximum number
    let maxArr = Array.from(numArray); 
    let temp = numArray[0];
    for(let i=0; i<maxArr.length; i++){
        if(temp === 9){ temp = maxArr[i+1];}
        if (temp < 9) {break;}
    }

   for(let j=0; j<maxArr.length; j++){
    if(maxArr[j]===temp){ maxArr[j]=9;}
   }
    
   maxNumber = Number(maxArr.join(''));

    // find possible minimum number
   let minArr = Array.from(numArray);
   temp = numArray[0];
   for(let i=0; i<minArr.length; i++){
       if(temp <= 1){ temp = minArr[i+1];}
       if (temp>1){ break;}
   }

   for(let j=0; j<minArr.length; j++){
    if(minArr[j]===temp){ minArr[j]=1;}
   }
    
   minNumber = Number(minArr.join(''));

   finalResult = maxNumber - minNumber;
   return finalResult;   
}

let num = 10239;
console.log(findRange(num));
