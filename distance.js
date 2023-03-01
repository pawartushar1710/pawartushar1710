

function distance(x,y){

    let t = y*(x+1) - 5*(x+2);
    let d = ((t+y)/60)*x;
    console.log(d);

}
 distance(4,20);


function calculatebrick(){

 let lengthofwall = 24;
 let heightofwall = 8;
 let thicknesofwall = 0.6;
 let volumeofwall =  lengthofwall*heightofwall*thicknesofwall

 let volumeofbrick = 24*12*8;
 let mortar = 15;

let noofbrick = (((100-mortar)/100) * volumeofwall * (100*100*100))/volumeofbrick
console.log(Math.ceil(noofbrick));
}
calculatebrick();
console.log(Math.round(99.8));
console.log(Math.ceil(99.8));

