
//string reversal

var z = "tushar";
var output = z[5]+z[4]+z[3]+z[2]+z[1]+z[0];
console.log(output);


// string reversal for dynamic data

//let x = "this is the way to do something";

function reversethis(str){

    output = "";

for (let i = str.length-1; i>=0; i--)
{
    output = output+str[i];
}
    console.log(output);

}

reversethis("this is the way to do something");
reversethis("civil engineering");




function reversit(string){

     result = "";

for (let i = string.length-1; i>=0; i--){


    result = result+string[i];
}
     console.log(result);

}

reversit("india will won asia this year for sure ");
reversit("mr.narendra modi is power full leader ");
