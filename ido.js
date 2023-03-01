



//incresing decreasing order


function checkOrder(a, b, c){

    //12 , 45 , 87 >>i
    //90 , 32 , 21>>d
    //4, 9 , 1>> none
   
    if(a<b && b<c){
       console.log("Increasing Order");
    }
      else if (a>b && b>c){
      console.log("Decreasing order")
    }
    else{
      console.log("no Order");
    }
   }     
   
   IncreasingDecreasingOrder(12,45,87);
   IncreasingDecreasingOrder(90,32,21);
   IncreasingDecreasingOrder(4,9,1);