

function pattern(num){ 

for (let i=1; i<= num; i++)

{

let stars = "";

for (let j=1; j<=i; j++)

{
    stars += "*";

}

console.log(stars);

}

}

pattern(5);

