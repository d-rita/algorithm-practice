let countElements = function(arr) {
    let countObj = {};
    let finalCount = 0;

    for(let i=0; i<arr.length; i++){
        countObj[arr[i]] = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[i]===arr[j]+1){
                countObj[arr[i]] += 1;
            }
        }
    }

    finalCount = Object.values(countObj).reduce((x, y)=> x+y);
    return finalCount;  
};

let a = [1,2,3];

let b = [1,1,3,3,5,5,7,7];

let c = [1,3,2,3,5,0];

let d = [1,1,2,2];

console.log(countElements(c))
