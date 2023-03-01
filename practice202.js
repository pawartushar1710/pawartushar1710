


// function printResult( value){

// switch(value){
//     case "2":
//     console.log(positive);
//     break;
// }


function checkNumber(input){


    if(input>0){
        console.log("positive");
    }else if(input<0){
        console.log("negative");
    }else if(input==0){
        console.log(0)
    }else{
        console.log("Invalid");
    }
}
checkNumber(1);
checkNumber(-1);
checkNumber(0);
checkNumber("a");
checkNumber(1/3);

