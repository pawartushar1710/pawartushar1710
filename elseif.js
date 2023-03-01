


function checkTime(time){

    if(time<4 && time<=22){
        console.log("This is night");

    }
    else if(time>4 && time<=12){
        console.log("this is morning");
     
    }

    else if(time>12  && time<=16){
    console.log("aftrnoon");

    }else if(time>16 && time<22){
        console.log("evening");
    }

    else {
        console.log("Invalide Time");
    } 
    }
   checkTime(7);
   checkTime(20);
   checkTime(35);
   checkTime(14);

