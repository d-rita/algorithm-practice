/**
 * initialize your data structure here.
 */
class MinStack{
    constructor(){
        this.struct = [];
    }

    push = (x)=> {
        this.struct[this.struct.length] = x;
    }

    pop = () => {
        if(this.struct.length === 0) return undefined;
        return this.struct.pop();
    }

    top = () => {
        return this.struct[this.struct.length-1];
    }

    getMin = () => {
        return Math.min(...this.struct);
    }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack)
console.log(minStack.getMin());   //--> Returns -3.
minStack.pop();
console.log(minStack.top());      //--> Returns 0.
console.log(minStack.getMin());  // --> Returns -2.