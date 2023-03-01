
// single digit sum

function SumtillSingleDigit(num){

const numstr = num.toString();

if(numstr.length==1){
    return numstr;

}

let sum = 0;

for (let i=0; i<numstr.length; i++){

    sum+=Number(numstr[i]);

}
if(sum>9){
    SumtillSingleDigit(sum);
}else{
console.log(sum);
}
};

SumtillSingleDigit(1234);
SumtillSingleDigit(999999999);
SumtillSingleDigit(1234654895);
