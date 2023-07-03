import { describe, expect, it } from 'vitest';
import { puzzle1, puzzle2 } from './index';

const input = `A Y
B X
C Z`;

describe('Puzzle 1', () => {
    it('Should match the problem description input', () => {
        const result = puzzle1(input);
        expect(result).eq(15);
    });
});

describe('Puzzle 2', () => {
    it('Should match the problem description input', () => {
        const result = puzzle2(input);
        expect(result).eq(12);
    });
});
