let solve = function(N, H){
    if (H.length!==N){
        return "Number of buildings does not match the number of heights entered!"
    }

    let maxReachList = [];
    let temp = 0;

    for(let i =0; i<N; i++){
        let counter = 0;
        let partialArr = H.slice(i+1);
        temp = H[i];
        for(let j=0; j<partialArr.length; j++){
            if(partialArr[j]>temp){
                temp = partialArr[j];
                counter++
            }  
        }
        maxReachList.push(counter);
    }
    return maxReachList.join(" ");
};

let num = 6;
let heights = [1,2,2,3,1,4];
let result = solve(num, heights);
console.log(result);