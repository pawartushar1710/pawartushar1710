

// practice 

function Reversepyramid(num){

    for (let i=1; i<=num; i++){
        let line="";
        for(let j=1; j<=i; j++){
            line=line+" "; 
    }
    for (let k=i; k<=num; k++){
     line=line+k+" "
    }
    console.log(line);
}
}

Reversepyramid(5);
// Reversepyramid(6);
// Reversepyramid(9);
