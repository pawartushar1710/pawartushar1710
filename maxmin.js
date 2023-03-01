
//minimum and maximum element

//input (2,3,15,6)

//output
//min. element = 2
//max. element = 15

function findminmax(array){

    let min = array[0];
    let max = array[1];     //max = Number.Max_VALUE
                            //min = Number.Min_VALUE
    for (let i=2; i<array.length; i++){

        if(array[i]<min){
            min=array[i];
        }

        if(array[i]>max){
            max=array[i];

        }

    }
console.log("Min: "+min);
console.log("Min: "+max);

    }

findminmax([2,3,15,6]);


