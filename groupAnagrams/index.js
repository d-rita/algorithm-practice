let areAnagrams = function(word1, word2){
    let verdict = false;
    if(word1.length === word2.length){
        if(word1.length === 0){
            verdict = true;
        } else {
            let arr1 = word1.split('');
            let arr2 = word2.split('');
            arr1.sort();
            arr2.sort();
            for(let j=0; j<word1.length; j++){
                if(arr1[j]!==arr2[j]){
                    verdict = false;
                    break;
                } else {
                    verdict = true;
                }
            }
        }
    }
    return verdict;
}

let groupAnagrams = function(strs) {
    let anagrams = [];
    let storedValueIndex = [];

    for (let i=0; i<strs.length; i++){
        let tempArr = [strs[i]];
        if(storedValueIndex.includes(i)){
            continue;
        } else {
            storedValueIndex.push(i)
            for(let j=i+1; j<strs.length; j++){
                    let check = areAnagrams(strs[i], strs[j]);
                    if(check === true){
                    tempArr.push(strs[j]);
                    storedValueIndex.push(j);
                }
            }   
        }
        anagrams.push(tempArr);
    }
    return anagrams
};




let a = ["", "", ""]
let arr = ["bat","eat", "tan", "ate", "nat", "tea"];

let b = ["ray","cod","abe","ned","arc","jar","owl","pop","paw","sky","yup","fed","jul","woo","ado","why","ben","mys","den","dem","fat","you","eon","sui","oct","asp","ago","lea","sow","hus","fee","yup","eve","red","flo","ids","tic","pup","hag","ito","zoo"]
console.log(groupAnagrams(arr));
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]