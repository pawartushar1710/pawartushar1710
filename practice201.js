

function CanGoToPark(temp , isRaining){

if(temp>=20 && temp<25 && isRaining==false){     //!isRaning

console.log("allow to play.");

}
else if(temp>18 && temp<20 && isRaining==true ){    //!isRaining

    console.log("dont allow to play.");
}   

else {

    console.log("invalid inputs.")
}

}


CanGoToPark(20 , false);
CanGoToPark(19 , true);
CanGoToPark(40 , true);
