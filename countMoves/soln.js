let countMoves = function(arr){
    let maxIndex = 0;
    let maxValue = 0;
    let counter = 0;
    let undone = true;
    while(undone){
        for(let i=0; i<arr.length;i++){
            maxValue = Math.max(...arr); 
            if(arr[i] === maxValue){
                maxIndex  = i;
            }
        };

        for(let i=0; i<arr.length;i++){
            if(i===maxIndex) { continue;}
            arr[i]+=1;
        };
        counter++;

        let arrayCheck = arr.every((value)=> value === arr[0]);
        if(arrayCheck === false){
            undone = true;
        } else {
            undone = false;
        };
    };
    return counter;
};

let array = [3,4,6,6,3];
console.log(countMoves(array));