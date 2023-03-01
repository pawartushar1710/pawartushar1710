


//creat a function expression=> function which stored in variable

//const add = function(a,b){
   // console.log(a+b);
//}
//console.log(typeof add);

//calling a function

//add(17,21);

const add = function(a,b){
    console.log(a+b);
}
const sub = function(a,b){
    console.log(a-b);
}
//console.log(typeof add);

//calling a function

//add(17,21);

// function addAndprintMessage(funadd , message){

//     add(17 , 21);
//     sub(17 , 21)
//     console.log(message);

// }

// addAndprintMessage(add , "hey");

function cal(func){
    func(10,20);

}
cal(add);
cal(sub);