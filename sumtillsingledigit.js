


function Sumtillsingledigite(num){


   const numStr =num.tostring();

   if(numStr.length==1){
    return numStr;
   }
let sum =0;
    for (let i=0; i<numstr.length; i++){

        sum+=Number(numStr[i]);

    }if(sum>9){

        Sumtillsingledigite(sum);
    }else{
console.log(sum);
    }
}
Sumtillsingledigite(12345);
