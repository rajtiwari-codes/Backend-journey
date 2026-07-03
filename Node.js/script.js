// let n=4;
// for(let i=0;i<=n;i++){
//     console.log("hello",i);
// }

// //1
// let args = process.argv;

// for (let i=2;i<args.length;i++){
// console.log(args[i]);
// }

// //2)module

const sum=(a,b)=>a+b;
const mul=(a,b)=>a*b;
const PI=3.14;
const g=9.8;

let raj={
    sum:sum,
    mul:mul,
    PI:PI,
    g:g,
};
module.exports=raj;
//1
// module.exports=123;

