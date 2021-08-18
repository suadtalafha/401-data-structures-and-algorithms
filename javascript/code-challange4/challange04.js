'use strict'

let array1 = [[1, 2, 3], [3, 5, 7], [1, 7, 10]]
let array2 = [[0, 1, 5], [-4, 7, 2], [-3, 12, 11]]


function matrix(sumArr){
 let finalSum=[];

 sumArr.map(sum=>{
     let sum1=0;
     sum.map(num=>{
         sum1=sum1+num
     });
     finalSum.push(sum1);
 })
 return finalSum
};

module.exports=matrix