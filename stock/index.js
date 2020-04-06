let maxProfit = function(prices) {
    let tempIndex = 0; 
    let profit = 0;

    while(tempIndex<prices.length){
        let bp = 0, sp = 0;
        let checkBuyingPrice = false;
        for(let i=tempIndex; i<prices.length; i++){
            if(prices[i]<prices[i+1]){
                bp = prices[i];
                tempIndex = i;
                checkBuyingPrice = true;
                break;
            }
        }
    
        if(!checkBuyingPrice){
            return profit;
        } else {
            tempIndex++
            for (let j = tempIndex; j<prices.length; j++){
                if(prices[j]<prices[j+1]){
                    continue;
                } else {
                    sp = prices[j];
                    tempIndex = j
                    break;
                }
            }
            tempIndex++;
        }
        profit += sp - bp;
    }  
    return profit;
};

let arr1 = [7,1,5,3,6,4];
let arr2 = [1,2,3,4,5];
let arr3 = [7,6,4,3,1];
let arr4 = [2,1,2,0,1]
console.log(maxProfit(arr4));
