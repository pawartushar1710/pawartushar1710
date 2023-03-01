 //reverse array
 //inpute = [1,2,3,4,5]
 //output = [5,4,3,2,1]


 function reversearr(array){

    const result = [];
    let j =0;

 for ( let i=array.length-1; i>=0; i--){

 result[j]=array[i];
 j++;
 }

console.log(result);
 }

reversearr([1,2,3,4,5]);

