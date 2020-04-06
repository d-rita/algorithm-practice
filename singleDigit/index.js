let  singleDigits = function(nums) {
    let digit = 0;
    nums.sort();
    
    for(var i=0; i<nums.length; i+=2){
        if((nums.length == (i+1)) || (nums[i] !== nums[i+1])){
            digit = nums[i];
            break;
        }
    }
    return digit;
};

let arr1 = [2,2,1, 3, 1, 4, 4]

let res = singleDigits(arr1)
console.log(res);
