


function FindMaxProfit(array){

let Buyingprice = 0;
let MaxProfit = 0;
let Sellingprice = 0;
let changebuyingPrice = true;

for (let i = 0; i<array.length-1; i++){

    Sellingprice = array[i+1];

    if(changebuyingPrice){

        Buyingprice = array[i]
    }
    if(Sellingprice<Buyingprice){

        changebuyingPrice = true;

    }else{

    let profit =Sellingprice-Buyingprice;
if(profit>MaxProfit){

     MaxProfit = profit;

        }  
        changebuyingPrice = false;

}

}
console.log(MaxProfit);
}
FindMaxProfit([100, 180, 260, 310, 40, 535, 695]);
FindMaxProfit([100, 18, 2160, 310, 4680, 55, 15]);
