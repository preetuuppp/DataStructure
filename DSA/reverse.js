function detectPalindrome(num){
let bagSave=num;
let rev=0;
while(num){
    let rem=num%10;
    num=Math.floor(num/10);
    rev=rev*10 +rem;
}

if(bagSave==rev){
    console.log("Yes");
}else{
    console.log("No");
}
}


detectPalindrome(1221)