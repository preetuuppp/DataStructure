// Such Pair Returns Ended
// Description

// For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).

// Input
// 10^6Input Format :

// First line contains T, no of test cases.

// First line of each test case contains 2 space separated integers: N & K

// Second line of each test case contains **N** space separated integers

// Constraints :

// 1 <= T <= 10

// 1 <= N <=1000000

// 1 <= abs(A[i]) <=10^6<= abs(K) <= 2*10^6

// Output
// Output 1/-1 depending on the condition for each test case on new line

// Sample Input 1

// 1
// 5 2
// 3 4 0 2 7
// Sample Output 1

// 1

function runProgram(input) {
  // Write Code Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let x = input[line].trim().split(" ").map(Number);
    line++;
    let n = x[0];
    let k = x[1];
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    SuchPair(n, k, arr);
  }
}
function SuchPair(n, k, arr) {
  arr = arr.sort((a, b) => {
    return a - b;
  });
  // console.log(arr)
  let i = 0;
  let j = n - 1;
  let c = 0;
  while (i < j) {
    if (arr[i] + arr[j] < k) {
      i++;
    } else if (arr[i] + arr[j] > k) {
      j--;
    } else if (arr[i] + arr[j] == k) {
      i++;
      j--;

      c++;
    }
  }
  if (c >= 1) {
    console.log(1);
  } else {
    console.log(-1);
  }
}

if (process.env.USERNAME === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
