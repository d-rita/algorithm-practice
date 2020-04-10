let lastStoneWeight = function(stones) {
    let size = stones.length;
    let control = size;

    if(size===1){
        return stones[0];
    } else {
        while(control>=1){
            stones.sort((a,b)=> a-b);
            let x = stones[size-2];
            let y = stones[size-1];
            if(x===y){
                stones[size-1] = stones[size-2] = 0;
                control-=2;
            } else {
                stones[size-2] = 0;
                stones[size-1] = y-x;
                control-=1;
            }
        }
        return stones[size-1];
    }  
}
let a = [8,10,4];
console.log(lastStoneWeight(a));
