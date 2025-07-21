//1.Swap the first and last element in an array.

// frist Method 1---> basic way swaping;
let arr = [10, 20, 30, 40, 50];

console.log(arr[0]); //10
console.log(arr[arr.length-1]); //50

let newlast = arr[0];
arr[0] = arr[arr.length-1]; //[10 = 50]
arr[arr.length-1]= newlast;  //[50 = 10]
console.log(arr); // [50 , 20, 30, 40 , 10]


// second way OR Use Destructuring--->
let num = [50, 20, 30, 40, 10];
[num[arr.length-1],num[0]] = [num[0],num[arr.length-1]]; //10,50 = 50,10
console.log(num)   //[10, 20, 30, 40, 50] 