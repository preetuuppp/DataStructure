// Non Vowel Substring Ended
// Description

// Given a stringstrof lengthN, find the length of the largest substring which contains only consonants.

// For example:str="abced", the sub-strings containing only consonants are:"bc"and"d", largest among them is"bc", so the output will be2, which is the length of largest sub-string containing only consonant.

// Another example:str="bfgedauty", here"bfg"is the largest substring without vowels or containing only consonants, so the output will be 3.

// Note:Input contains only the lowercase English alphabet.


// Input
// Input Format:

// First line of input contains the number N , denoting the length of the string.

// Second line of input contains the string.

// Constraints:

// 1<=N<=1000


// Output
// Output an integer which is the length of largest substring containing only consonant (non-vowels)


// Sample Input 1 

// 5
// abced
// Sample Output 1

// 2
// Sample Input 2 

// 4
// aetu
// Sample Output 2

// 1





function nonVowelSubString(N, str){
    // write code here
    let max=0
    for(let i=0;i<=N-1;i++){
        let subStr=""
        for(let j=i;j<=N-1;j++){
            subStr+= str[j]
        // console.log(subStr)
            if(checkCons(subStr) && subStr.length>max){
                max=subStr.length
            }
        }
    }
    console.log(max)
}

function checkCons(s){
    let flag=true
    for(let el of s){
        if((el=='a'||el=='e'||el=='i'||el=='o'||el=='u')){
         flag= false
        }
    }
    return flag
    
}
