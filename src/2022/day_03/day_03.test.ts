import { describe, expect, it } from 'vitest';
import { puzzle1, puzzle2 } from './index';

const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

describe('Puzzle 1', () => {
    it('Should match the problem description input', () => {
        const result = puzzle1(input);
        expect(result).eq(157);
    });
});

describe('Puzzle 2', () => {
    it('Should match the problem description input', () => {
        const result = puzzle2(input);
        expect(result).eq(70);
    });
});
