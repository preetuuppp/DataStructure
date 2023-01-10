// Product of array except self Ended
// Description

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)


// Input
// Input Format
// The input consists of multiple testcases.

// The first line of input contains an integer t - the number of testcases.

// The following 2*t lines contain the description of the t testcases.

// The first line of each testcase contains an integer n - the size of the array.

// The second line of each testcase contains n space-separated integersnums[1],nums[1],...nums[i]..,nums[n]

// Constraints
// 1 <= t <= 10^3

// 2 <= nums.length <= 10^5

// -30 <= nums[i] <= 30


// Output
// Output Format
// For each testcase output the n integers, where n is the size of the array of that testcase, where the ith (1<=i<=n) integer is the product of the array except for the ith element


// Sample Input 1 

// 2
// 4
// 1 2 3 4
// 5
// -1 1 0 3 -3
// Sample Output 1

// 24 12 8 6
// 0 0 9 0 0

function productofArr(n,arr){
    let bag=''
    res = new Array(arr.length);
    left = 1;
    for(let i=0; i<n; i++) {
    res[i] = left;
    left *= arr[i];
    }
    right = 1;
    for(let i = arr.length-1; i>=0; i--){
    res[i] *= right;
    right *= arr[i];
    }
    
    for(let k=0;k<res.length;k++){
        bag+= res[k]+" "
    }
    console.log(bag);
        }
        
        
        let array=[1,2,3,4]
        let n1=array.length
        productofArr(n1,array);