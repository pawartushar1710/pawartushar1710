

// reverse pyramid...

function printreversepyramid(num){

  for(let i=1; i<=num; i++){

      let line="";
      //1.print initial space
      for (let j=1; j<=i; j++){
        line = line+" ";
      }

      // 2.print nums & spaces in between
      for (let k=i; k<=num; k++){
        line = line+k+" ";
      }
      console.log(line);
  }
}

printreversepyramid(6);
printreversepyramid(9);

