

function DemoContinueAndBreak(){

let x = 9;

for (let i=0; i<=x; i++){

    if(i==5){
        break;// skip all remaining iteration
    }
    console.log(i);

}
for (let i=0; i<=x; i++){

    if(i==5){
        continue;  //will sskip this iteration
    }
    console.log(i);

}

}
DemoContinueAndBreak();
