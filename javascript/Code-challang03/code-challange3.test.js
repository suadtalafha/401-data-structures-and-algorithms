'use strict';

let BinarySearch = require('./code-challange')



describe('test BinarySearch', () => {
    it('should test BinarySearch  ', () => {
        let arr1 = [4, 8, 15, 16, 23, 42]
        let arr2 = [-131, -82, 0, 27, 42, 68, 179]
        let arr33 =  [11, 22, 33, 44, 55, 66, 77]
        expect(BinarySearch(arr1, 15)).toStrictEqual(2)
        expect(BinarySearch(arr2, 42)).toStrictEqual(4)
        expect(BinarySearch(arr33, 90)).toStrictEqual(-1)
    })
})