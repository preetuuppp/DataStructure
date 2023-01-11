// Bubble Sort Problem -98:14:33
// Description

// You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.

// USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION

// Input
// Input Format:

// First line of input contains N

// Second line of input contains N numbers

// Constraints:

// N < 500

// Output
// Output the numbers given after sorting it in increasnig order

// Sample Input 1

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9

// function sorting(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     let minValue = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < minValue) {
//         minValue = j;

//     }
// }
// let temp = array[i];
// array[i] = array[minValue];
// minValue = temp;
//   }
//   console.log(array);
// }
// sorting([3,0,5,9,8]);


let arr=[3,0,5,9,8];
let N=arr.length;
function solve(N,arr){
    //write code here
     
for (let i =0;i<N-1; i++) {
    let minVal = i
    for (let j =i+1; j<N; j++) {
        // console.log(j)
     if (arr[minVal] > arr[j]) {
     minVal = j;
    
       }
     }
    // swapping
    let temp = arr[i];
    arr[i] = arr[minVal];
    arr[minVal] = temp;
        }
       
//   console.log(arr)

    let bag=""
    for(let i=0;i<arr.length;i++){
        bag+= arr[i]+" "
    }
    return bag;
}
console.log(solve(N,arr));
