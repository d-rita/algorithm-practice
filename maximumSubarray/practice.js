// Unacceptable Too much going on
let maxSubArray = function(nums) {
    let maxSum = nums.reduce((val1, val2)=> val1+val2);

    for(let i =0; i<nums.length; i++){
        let b = [];
        let tempSum = 0;
        for(let j = i; j< nums.length; j++){
            b = nums.slice(i, j+1);
            tempSum = b.reduce((val1, val2)=> val1 + val2);
            if(tempSum > maxSum){
                maxSum = tempSum
            }
        }
    }
    return maxSum;
};

let arr = [-2,-1, 2]
console.log(maxSubArray(arr))
