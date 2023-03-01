

// find min & max element from array

function FindMinAndMax(array){

let Min = array[0];
let Max = array[1];

for (let i=2; i<array.length; i++){

   if(array[i]<Min)
   {
    Min = array[i];
   } 

   if(array[i]>Max)
   {
    Max = array[i];
   }
   
   }
   console.log("Min " +Min);
   console.log("Max " +Max);
}
FindMinAndMax = ([2,3,15,6]);
//FindMinAndMax = ([22,14,15,6]);
