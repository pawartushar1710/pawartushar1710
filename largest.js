
//largest among three numbers

function findLargest(a,b,c){

if(a>b && a>c){
    console.log("A Is Largest");
}else if(b>a && b>c){
    console.log("b Is Largest");
}else{
    console.log("C Is Largest");
}

}

findLargest(300,200,100);
findLargest(100,300,200);
