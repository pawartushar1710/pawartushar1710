  

  // ternary operators

  function IsOddorEven(num){

    return num%2==0 ? "Even" : "Odd";

  }


  console.log( IsOddorEven(58));
  console.log( IsOddorEven(5));


  function checkiflargest(a,b,c){

 return a>b && a>c ? "a is largest" : b>a && b>c ?"b is largest" : "c is largest"

  }
   
console.log(checkiflargest(2,3,6));
console.log(checkiflargest(5,2,0));
console.log(checkiflargest(5,53,326));
