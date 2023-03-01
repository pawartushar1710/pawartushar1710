
function GoToPark(temp , Israining){

    if(temp>20 && temp<25 && !Israining){
        console.log("Childeren can go to park");

    }else if(temp>18 && temp<20 && Israining){
        console.log("Childeren can not go to park");

    }else{
        console.log("Not Valide");
    }
    }

    GoToPark(22 , false);
    GoToPark(19 , true);
    GoToPark(55 , true);