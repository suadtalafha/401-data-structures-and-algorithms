'use strict';

let array = [4, 8, 15, 16, 23, 42];
let array2 = [-131, -82, 0, 27, 42, 68, 179]
let array3 = [11, 22, 33, 44, 55, 66, 77]


function BinarySearch (sortedArray, searchKey){
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === searchKey) {
            return i;
        }
    }
    return -1;
}



module.exports = BinarySearch

