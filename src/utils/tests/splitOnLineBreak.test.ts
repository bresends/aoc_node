// create a simple test with vitest
import { expect, it, describe } from 'vitest';
import { splitOnLineBreak } from '../splitStrings';

const sampleCalories = `1000
2000
3000

4000`;

describe('splitOnLineBreak', () => {
    it('should split a string on line breaks', () => {
        const input = 'Hello\nWorld\r\nHow are you?';
        const expected = ['Hello', 'World', 'How are you?'];
        const result = splitOnLineBreak(input);
        expect(result).toEqual(expected);
    });

    it('should return an empty array if input string is empty', () => {
        const input = '';
        const expected = [''];
        const result = splitOnLineBreak(input);
        expect(result).toEqual(expected);
    });

    it('should return correct calories match', () => {
        const input = sampleCalories;
        const expected = ['1000', '2000', '3000', '', '4000'];
        const result = splitOnLineBreak(input);
        expect(result).toEqual(expected);
    });

    it('should handle a string without line breaks', () => {
        const input = 'Hello World';
        const expected = ['Hello World'];
        const result = splitOnLineBreak(input);
        expect(result).toEqual(expected);
    });

    it('should throw an error if the input is not a string', () => {
        const input = 123; // Invalid input: not a string
        expect(() => splitOnLineBreak(input)).toThrow();
    });
});
