// inspired by Kadane's algorithm

let subArray = function (arr) {
    let maxSum = arr.reduce((val1, val2)=> val1+val2);
    let currentSum = 0;
    
    for(let i = 0; i< arr.length; i++){
        if(currentSum <= 0){
            currentSum = arr[i];
        } else {
            currentSum += arr[i];
        }
        if (currentSum > maxSum){
            maxSum = currentSum
        }
    }
    return maxSum;
    
}

let a = [-2,1,-3,4,-1,2,1,-5,4];
console.log(subArray(a));
