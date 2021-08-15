'use strict'



// ......................................................................
// Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

// Example
// Input	Output
//[1, 2, 3, 4, 5, 6]	[6, 5, 4, 3, 2, 1]
// ..........................................................................

function reverseArray(array){
    let newArray=[];
    for(let i=array.lenght -1;i>=0;i--){
        newArray.push(array[i])
    }
    return newArray
}
describe('Test The Code ' ,()=>{
    it('should test reversarray',()=>{
        expect(reverseArray([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1])
    })
   
})