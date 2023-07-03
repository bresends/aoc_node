import { describe, expect, it } from 'vitest';
import { puzzle1, puzzle2 } from './index';

const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

describe('Puzzle 1', () => {
    it('Should match the problem description input', () => {
        const result = puzzle1(input);
        expect(result).eq(24000);
    });
});

describe('Puzzle 2', () => {
    it('Should match the problem description input', () => {
        const result = puzzle2(input);
        expect(result).eq(45000);
    });
});

