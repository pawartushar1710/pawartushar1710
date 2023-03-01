

function printResult(grade){

switch(grade){
    case "A+":{
        console.log("Distinction");
        break;
    }
    case "A":{
        console.log("first class");
        break;
    }
    case "C":{
        console.log("fail");
        break;
    
    }
    default : {
        console.log("Invalide value");
    }
    
 }
    console.log("Out of switch");
   }

//printResult("A+");
//printResult("A");
//printResult("B");
printResult("Z");
printResult("C");