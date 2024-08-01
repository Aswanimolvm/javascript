// console.log("hello world");

// let name = 'jhon'

// console.log(`my name is ${name}`);


// let a ="hello world"

// for(let i in a){
//     console.log(a[i]);
// }


let a = "abcabcdbb";
let s="";
let b=[];
for (let i=0;i<a.length;i++){
    if (s.includes(a[i])){
        b.push(s);
        s="";

    }
    s+=a[i]
}
console.log(b);

const longestString = b.reduce((x, y) => x.length >= y.length ? x : y);
console.log(longestString.length);