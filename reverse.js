

function reverseArray(array){
const result = [];
let j=0;
for (let i=array.length-1; i>=0; i--){
    result[j] = array [i];
    j++;

}

console.log(result);

}
reverseArray([1,2,3,4,5,6,7,8,9]);

reverseArray(["a",21,"k",65,"tushar",17]);
