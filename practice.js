

//Voting Age
//(1)

function IsVotingAge(age){

    if (age>=18){
        return true;

    }
       else return false;

}
console.log(IsVotingAge(15));
console.log(IsVotingAge(20));





//(2)

function IsVotingAge(Age){

    if(Age>=18){
        console.log("True");
    }else 
    console.log("False");
}

IsVotingAge(23);
IsVotingAge(17);
IsVotingAge(19);

//Find Largest

function FindLargest(a,b,c){

if(a>b && a>c){
    console.log(a+"is largest");
}else if(b>a && b>c){
    console.log(b+"islargest");
}else
console.log(c+"islargest");

}

FindLargest(251,151,51);
FindLargest(51,191,151);
FindLargest(351,451,551);


//GRADING SYSTEM

function printGradingSystem(score){

if(score>=90){
    console.log("A");
}else if(score>=80 && score<90){
    console.log("B");
}else if(score>=60 && score<79){
    console.log("C")
}else if(score>=59 && score<35){
    console.log("C");
}else{
    console.log("F");
}

}
printGradingSystem(89);
