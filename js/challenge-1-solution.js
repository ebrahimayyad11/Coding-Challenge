
// this array just to see if the function is working good
let arr = [4,16,36];

// square root function
function square_root(arr){
    for (let i = 0;i < arr.length ; i++){
        let square = Math.pow(arr[i] , .5);
        console.log(arr[i]+' --> '+ square);
        alert(arr[i]+' --> '+ square);
    }
}

// the call of the function
square_root(arr);