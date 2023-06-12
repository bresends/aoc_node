// create a simple test with vitest
import { expect, it, describe } from 'vitest';
import { splitOnEmptyLine } from '../splitStrings';

const sampleCalories = `1000
2000
3000

4000`;

describe('splitOnEmptyLine', () => {
    it('should split a string on empty lines', () => {
        const input = 'Hello\n\nWorld\nHow are you?\n\nFine';
        const expected = ['Hello', 'World\nHow are you?', 'Fine'];
        const result = splitOnEmptyLine(input);
        expect(result).toEqual(expected);
    });

    it('should return an empty array if input string is empty', () => {
        const input = '';
        const expected = [''];
        const result = splitOnEmptyLine(input);
        expect(result).toEqual(expected);
    });

    it('should handle a string without empty lines', () => {
        const input = 'Hello World';
        const expected = ['Hello World'];
        const result = splitOnEmptyLine(input);
        expect(result).toEqual(expected);
    });

    it('should return correct calories match', () => {
        const input = sampleCalories;
        const expected = ['1000\n2000\n3000', '4000'];
        const result = splitOnEmptyLine(input);
        expect(result).toEqual(expected);
    });

    it('should throw an error if the input is not a string', () => {
        const input = 123; // Invalid input: not a string
        expect(() => splitOnEmptyLine(input)).toThrow();
    });
});
