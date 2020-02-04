let lotteryCoupons  = function(n) {
    let array = [];
    let sumArray = [];
    let finalResult= 0;

    //create an array from the integer value entered
    for(let i=1; i<=n; i++){
        array[i-1]=i;  
    }
    
    // split multiple digit numbers and add them up before adding them to the sumArray
    // for example: given an array [1,2,3,4,5,6,7,8,9,10,11,12]
    // the new array(sumArray) after this loop is [1,2,3,4,5,6,7,8,9,1,2,3]
    for(let i = 0; i<array.length; i++){
        let sum = 0;
        let intValueArray = array[i].toString().split('').map(Number);
        sum = intValueArray.reduce((total, num)=> total+num);
        sumArray.push(sum);
    };

    // sort the new array 
   sumArray.sort((first, second)=> first-second);

    //create an object with the sums as the keys and the number of times they occur in the sumArray as the values  
   let numberCounts = {}
   sumArray.forEach((x)=>{
    numberCounts[x] = (numberCounts[x] || 0) + 1;
   });
   console.log(numberCounts)

    // create a new array containing all the values 
   let valuesCountArray = Object.values(numberCounts);

    // find the max value in the array     
   let maxValueCount = Math.max(...valuesCountArray);
   console.log(`maxvalue>>>>>${maxValueCount}`)

   //loop through the array to know how many times the maxValue occurs to get the value of s
   valuesCountArray.forEach((x)=> {
       if(x===maxValueCount) { finalResult+=1; }
   })
    return finalResult
};

let n = 25;
console.log(lotteryCoupons(n));
