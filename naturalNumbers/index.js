let countSums = function(n){
    let halfArray = [];
    let sum =0, counter = 0
    let undone=true;
    
    // create an array of numbers from 1 to N/2
    // if N is odd, add the next natural number to the array
    for(let i=1; i<=(parseInt(n/2)); i++ ){
        halfArray[i-1] = i;
    }
    if(n%2!==0){
        halfArray.push(halfArray[halfArray.length-1]+1);
    }

    // loop through the array and add up the elements
    while(undone){
        for(let j=0; j<halfArray.length; j++){
            sum+=halfArray[j];
            if(sum===n){
                counter++;
                break;
            }
            if(sum>n){
                break;
            }
            if(sum<n){
                continue;
            }
        }
        sum=0;
        halfArray.shift();
        
        if(halfArray.length===1){
            undone = false;
        } else {
            undone = true;
        }
    }
    return counter;
};

console.log(countSums(12));