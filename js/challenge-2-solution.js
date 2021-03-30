// an empty array to add the user numbers to it
let arr = [];

// a for loop to show a prompt to the user and store the number he add to the array
for (let i = 1; i <= 5 ; i++){
    let newNum = prompt('please Enter the number');
    arr.push(newNum);
}

// put the first number of the array to the max and the min just to can compare it
let max = arr[0];
let min = arr[0];


// a for loop that compare each number in the array with the max and the min
for(let i = 0;i<arr.length;i++){
    if (max < arr[i]){
        max = arr[i];
    }

    if (min > arr[i]){
        min = arr[i];
    }
}


// an alert and a console to show the result
alert('The maximum number = '+max+'\n'+'the minimum number = '+min);
console.log('The maximum number = '+max+'\n'+'the minimum number = '+min);