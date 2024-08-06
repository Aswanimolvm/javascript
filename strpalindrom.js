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

// let a = 'abbd';
// let array = a.split("").reverse()
// console.log(array);
// let s= []

// for(let i=0;i<a.length;i++){
//     if(a[i]==array[i]){
//         s.push(a[i])
//     }
// }

// console.log(s);
// let x=s.join('')
// console.log(x);


const person = {
    name: 'john',
    age: 23,
    gender: 'male',
    person: {
        name: 'john',
        age: 23,
        gender: 'male',

    }
}

// let shallowcopy= {...person}
// shallowcopy.person.name="david"
// console.log(shallowcopy);
// console.log(person);

//  console.log( person["age"]);

// let a = {apple:50,oraange:3,mango:10,kiwi:20}
// let b=[]
// for (let i in a){
//     b.push(a[i])

// }
// console.log(b);
// let largest = b.reduce((a,b)=>a>b?a:b)
// console.log(largest);
// for (let i in a){
//     if (a[i]==largest)
//         console.log(i);
// }

// let products=[
//     {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
//     {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
//     {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
//     {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
//     {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
// ]
// let p=products.map(products=>products.pName)
// console.log(p);
// // for (let i in p){
// //     console.log(p[i]);
// //     }
// let m=products.map(products=>products.display)
// let y=[]
// for (let i in m){
//     if (m[i]=="lcd"){
//         y.push(p[i]);
//     }
// }
// console.log(y);
// let b=products.map(products=>products.band)
// let x=[]
// for (let i in b){
//     if (b[i]=="5g"){
//         x.push(p[i]);
//     }
// }
// console.log(x);
// let f=products.map(products=>products.price)
// let l=[]
// let largest = f.reduce((a,b)=>a>b?a:b)
// for (let i in f){
//     if (f[i]==largest)
//         l.push(p[i]);
// }
// console.log(l);

// let c=products.map(products=>products.price)
// let s=[]
// let smallest = c.reduce((a,b)=>a<b?a:b)
// for (let i in c){
//     if (c[i]==smallest)
//         s.push(p[i]);
// }
// console.log(s);


const obj = {
    a: {
        a1: 1,
        a2: 2,
        a3: 3
    },
    b: {
        b1: 3,
        b2: 4,
        b3: 5,
        z: {
            z1: 0,
            z2: -1
        }
    },
    c: 5,
    d: 6
}
// const x = {
//     ...obj.a,
//     ...obj.b,
//     ...obj.b.z,
//     c: obj.c,
//     d: obj.d

// }
// delete x.z;
// console.log(x);


let result = {}

function falttenObj(obj) {

    let primaryKeyObj = {}

    for (let pk in obj) {

        primaryKeyObj = obj[pk]

        if (typeof primaryKeyObj == 'object') {

            falttenObj(primaryKeyObj)


        } else {
            result[pk] = obj[pk]

        }

    }

    // console.log(primaryKeyObj);

    return result

}


console.log(falttenObj(obj))
