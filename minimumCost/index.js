function minCost(c, N){
    if(c.length!==N){
        return "Ensure to input the pencil costs for each student";
    }
    let totalMinCost = 0;
    let tempIndex = 0;

    let minCost = Math.min(...c[0]);
    let minIndex = c[0].indexOf(minCost);
    totalMinCost = minCost;

    for(let i =1; i<N; i++){  
        minCost = Math.min(...c[i]);
        tempIndex = c[i].indexOf(minCost);
        if (tempIndex !== minIndex){
            totalMinCost += minCost;
            minIndex = tempIndex;
        } else if (tempIndex === minIndex){
            if(tempIndex ===0){
                if(c[i][1]<=c[i][2]){
                    minCost = c[i][1];
                    minIndex = 1;
                } else if (c[i][1]>c[i][2]){
                    minCost = c[i][2];
                    minIndex = 2;
                };
            } else if (tempIndex ===1){
                if(c[i][0]<=c[i][2]){
                    minCost = c[i][0];
                    minIndex = 0;
                } else if (c[i][0]>c[i][2]){
                    minCost = c[i][2];
                    minIndex = 2;
                }
            } else if (tempIndex ===2){
                if(c[i][0]<=c[i][1]){
                    minCost = c[i][0];
                    minIndex = 0;
                } else if (c[i][0]>c[i][1]){
                    minCost = c[i][1];
                    minIndex = 1;
                }
            }
            totalMinCost += minCost;
        }
    }
    return totalMinCost;
}

let arr = [[2,1,1], [3,2,2], [1,2,2], [1,2,2]]
let len = 4;
console.log(minCost(arr, len))
