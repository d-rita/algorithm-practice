let backspace = function(word){
    let arr = [];
    let jump = 0;

    for(let i = word.length-1; i>=0; i--){
        if(word[i]=="#"){
            jump++;
        } else {
            if(jump === 0){
                arr.unshift(word[i]);
            } else {
                jump--;
            }  
        }
    };

    return arr.join('');

}

let compareBackspacedWords = function(s, t){
    let first = backspace(s);
    let second = backspace(t);

    console.log(first, second)

    if(first === second){
        return true;
    } else {
        return false;
    }
}

let a = "a#c";
let b = "b";
console.log(compareBackspacedWords(a,b));

