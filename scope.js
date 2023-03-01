
                      // varibables= const, var, let
                      // const not change
                      // let can used in block level scope 

                      // var is function level scope
                      
                      
function printMessage(){

    var x ="Hello";
    console.log(x);
    return x;
}

var result = printMessage();
console.log(result);

// creating Block inside function
// var has function level scope you can acces it otside or inside block
//but let is only accessed inside the block


function printMessage(){

    {

    var x ="Hello";
    let xs="hi";

    console.log(x);
    console.log(xs);

    }

}
//var result = printMessage();
//console.log(result);
