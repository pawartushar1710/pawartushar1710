
function  result(grade){

switch (grade){
case "A+":{
console.log("distinction");
break;
}
 case "A":{
    console.log("first class");
    break;
 }
case "B":{
    console.log("second class");
    break;
}
case "C":{
    console.log("failed");
    break;
}
default : {
    console.log("Invalide Grade");
}
    console.log("Not In Switch");
}

}

result("A+");
result("Z");
result("C");
result("A");
result("B");
