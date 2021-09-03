'use strict';

const validateBrackets=require('../stack-queue-brackets');

describe('validateBrackets',()=>{
    it('Brackets in the string are balanced ',()=>{
        let test = validateBrackets('[({})]')

        expect(test).toBe(true);
    });

    it('Brackets in the string are balanced ',()=>{
        let test = validateBrackets('{}')

        expect(test).toBe(true);
    });

    it('Brackets in the string are balanced ',()=>{
        let test = validateBrackets('(){}[[]]')

        expect(test).toBe(true);
    });

    it('Brackets in the string are balanced ',()=>{
        let test = validateBrackets('[({}]')

        expect(test).toBe(false);
    });

    it('Brackets in the string are balanced ',()=>{
        let test = validateBrackets('(](')

        expect(test).toBe(false);
    });

    it('Brackets in the string are balanced ',()=>{
        let test = validateBrackets('{(})')
        
        expect(test).toBe(false);
    });


})