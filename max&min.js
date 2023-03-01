

//find maximum and minimum

function findminandmax(array){

 let min=array[0];
 let max=array[1];

 for (let i=2; i<array.length; i++){

if (array[i]<min){

    min=array[i];
}
if(array[i]>max){

    max=array[i];
}
    
 }
console.log("Min " +min);
console.log("Max " +max);

}

findminandmax([2,3,15,6]);

findminandmax([2,3,1,6]);

findminandmax([442,443,165,6]);