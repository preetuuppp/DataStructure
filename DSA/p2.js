//Merge Two Sorted Array
let arr1=[1,2,3,4]
let n1=arr1.length
let arr2=[7,7,8,9,10]
let n2=arr2.length


const merge=function(n1,arr1,n2,arr2){
    let i=0;
    let j=0;
    let k=0;
    let res=new Array(n1+n2);

    while(i<n1 && j<n2)
{
    if(arr1[i]<arr2[j]){
        res[k]=(arr1[i]);
        i++;
        k++
    }else if(arr1[i]>=arr2[j]){
res[k]=(arr2[j]);
j++
k++;
    }
}
while(i<n1){
    res[k]=(arr1[i]);
    i++
    k++
}
while(j<n2){
    res[k]=(arr2[j]);
    j++
    k++
}
console.log(res)
}

merge(arr1,arr2,n1,n2)