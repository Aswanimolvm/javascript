// let s1="hai amma hello"
// let s3=[]
// s3=s1.split()
// console.log(s3);
// s2=s1.substring(0,3)
// s3=s2.split('').reverse().join('')
// if (s2==s3){
//     console.log("it is palindrome");
// }else{
//     console.log("not palindrome");
// }

let a = 'abbd';
let array = a.split("").reverse()
console.log(array);
let s= []

for(let i=0;i<a.length;i++){
    if(a[i]==array[i]){
        s.push(a[i])
    }
}

console.log(s);
let x=s.join('')
console.log(x);