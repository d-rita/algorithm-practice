// create an array for maintaining history
// processing flag

let structure = function(){
    this.storage = {};
    this.history = [];

    this.evict =() =>{
        // this is accounting for the eldest in terms of adding, not getting
        delete this.storage[Object.keys(this.storage)[0]]
    };

    this.add = function(key, value){
        this.storage[key] = value;
    }

    this.get = function(key){
        if(key in this.storage){
            // console.log('ooooo')
            return this.storage[key]  
        } else {
            return -1;
        }
    };

    this.remove = function(key){
        if(key in this.storage){
            let myValue = this.storage[key];
            delete this.storage[key];
            return myValue; 
        } else {
            return -1;
        }
    }

    this.exit = function(){
        // exit function goes here>>>>>
        // this.status = 0
        // console.log('>>>>>>>aaaaaaaaaa',this.status)
    }

    
    
}

let m = new structure()
m.add(5, 3)
m.add(1,2)
// console.log(m)
console.log(m.get(5))
m.evict()
console.log(m.get(1))
console.log(m.remove(5))
m.exit()
m.evict()
m.add(9,2)
m.add(7, 3)
m.get(9)