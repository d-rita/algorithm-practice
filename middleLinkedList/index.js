

class Node{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    add = (data) => {
        let node = new Node(data)
        if(this.head === null){
            this.head = node;
        } else {
            let currentNode = this.head;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            currentNode.next = node;

        }
    }

    getNode = (index) => {
        let currentNode = this.head;
        let currentIndex = 0;
        while(currentIndex < index){
            currentIndex++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
}

var middleNode = function(head) {
    let listLength = head.length;
    let midIndex = Math.ceil((listLength+1)/2) - 1;

    let newList = new LinkedList();

    for(let i = 0; i<head.length; i++){
        newList.add(head[i])
    }

    return newList.getNode(midIndex);
};

// let mine = [1,2,3,4,5];
let b = [1,2,3,4,5,6];
console.log(middleNode(b))