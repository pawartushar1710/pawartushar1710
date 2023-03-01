
function CheckTime(time){

if(time>=10 && time<17){
    console.log("Night");

}else if(time>=17 && time<10){
    console.log("Morning");

}else if (time>10 && time<22){
    console.log("Aftarnoon");

}else if(time>22 && time<17){
    console.log("Evening");
}else{
    console.log("Invalide Time");
}

}

CheckTime(22);
CheckTime(10);

//nedd to take time in 12hrs