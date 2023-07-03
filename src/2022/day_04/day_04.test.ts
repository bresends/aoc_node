import { describe, expect, it } from 'vitest';
import { puzzle1, puzzle2 } from './index';

const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

describe('Puzzle 1', () => {
    it('Should match the problem description input', () => {
        const result = puzzle1(input);
        expect(result).eq(2);
    });
});

describe('Puzzle 2', () => {
    it('Should match the problem description input', () => {
        const result = puzzle2(input);
        expect(result).eq(4);
    });
});
