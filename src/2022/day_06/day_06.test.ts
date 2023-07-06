import { describe, expect, it } from 'vitest';
import { puzzle1, puzzle2 } from './index';

describe('Puzzle 1', () => {
    it('should match the problem description input', () => {
        const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb';
        const result = puzzle1(input);
        expect(result).eq(7);
    });
    it('should match the problem description input', () => {
        const input = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
        const result = puzzle1(input);
        expect(result).eq(5);
    });
});
describe('Puzzle 2', () => {
    it('should match the problem description input', () => {
        const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb';
        const result = puzzle2(input);
        expect(result).eq(19);
    });
    it('should match the problem description input', () => {
        const input = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
        const result = puzzle2(input);
        expect(result).eq(23);
    });
});
