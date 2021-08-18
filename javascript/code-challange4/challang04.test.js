'use strict';

let matrix=require('./challange04');

describe('test matrix function',()=>{
    to('return the sum of sub-array',()=>{
        let test1 = [[1, 2, 3], [3, 5, 7], [1, 7, 10]]
        let test2 = [[0, 1, 5], [-4, 7, 2], [-3, 12, 11]]
        expect(matrix(test1, 15)).toStrictEqual([6, 15, 18])
        expect(matrix(test2, 42)).toStrictEqual([6, 5, 20])
    })
})