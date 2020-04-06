let moveZeroes = function(nums) {
    let index = 0; 
     
     for(let i=0; i<nums.length; i++){
         if(nums[i]!==0){
             nums[index] = nums[i];
             index++;
         }
     }
     
     for(j=index; j<nums.length; j++){
         nums[j] = 0;
     }
     return nums;
 
 };

let arr = [0,1,0,3,12];
console.log(moveZeroes(arr))
    