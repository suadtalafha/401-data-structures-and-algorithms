'use strict'

// ...................................................................................
/*Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

Input	Output
[2,4,6,-8], 5	[2,4,5,6,-8]

*/ 

function insertShiftArray(value,number){
let place;

let shiftedValue=value.length/2;

if(shiftedValue%2==0){
    place=shiftedValue
}else {
    place=shiftedValue+1
}
value.splice(place,0,number);
return value

}


describe('test the code ',()=>{
    it('should return shifted array',()=>{
        expect(insertShiftArray([2,4,6,-8], 5).toEqual(insertShiftArray([2,4,5,6,-8])))
    })
})