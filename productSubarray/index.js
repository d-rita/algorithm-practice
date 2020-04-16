let productExceptSelf = function(nums) {
    let frontProduct = 1; backProduct = 1;
    let forwardProducts = [];
    let reverseProducts = [];
    let finalArr = [];
    for(let i=0; i<nums.length; i++){
        frontProduct = frontProduct * nums[i];
        forwardProducts[i] = frontProduct;

        backProduct = backProduct * nums[nums.length-i-1];
        reverseProducts[nums.length-i-1] = backProduct;
    }

    for(let j=0; j<nums.length; j++){
        let temp = 1;
        if(j===0){
            finalArr.push(reverseProducts[j+1])
        } else if (j === nums.length-1){
            finalArr.push(forwardProducts[j-1])
        } else {
            temp = forwardProducts[j-1]*reverseProducts[j+1];
            finalArr.push(temp);
        }
    }
    return finalArr;
};

let b = [1,2,3,4,5];
console.log(productExceptSelf(b))
