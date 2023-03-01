

// finding prime numbers till num

function PrimeNums(n){

for (let i = 3 ; i<=n; i++){

     for( let j=2; j<=i; j++){

          if(j==i){

          console.log(i);
         }
          if(i%j==0){
          break;
        }
      } 
  }
}

// PrimeNums(10);
// PrimeNums(11);
PrimeNums(100);