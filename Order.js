
//increasing or decreasing order

function checkorder(a,b,c){

    if(a<b && b<c){
        console.log("+Increasing Order");

    }else if(a>b && b>c){
        console.log("-Decreasing Order");

    }else{
        console.log("*Mixed Order");

    }
}
checkorder(33,212,11);
checkorder(11,22,33);
checkorder(33,22,11);
checkorder(22,11,33);
