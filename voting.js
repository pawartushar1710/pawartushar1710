
// voting age 

function IsVotingAge(Age){

if(Age>=18){
    return true;
}else{
    return false;
}
}
console.log(IsVotingAge(18));
console.log(IsVotingAge(17));


function voter(age){

    if(age>=18){
        console.log("you can vote");
    }else{
        console.log("you are not voter");
    }
}

voter(21);
voter(15);
