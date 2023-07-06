import { describe, expect, it } from 'vitest';
import { getStacks, moveStacks, puzzle1, puzzle2, getTopBoxes } from './index';

const input = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

describe('Get New Stack', () => {
    const [crates, instructions] = input.split('\n\n');

    it('Should convert the boxes to arrays', () => {
        const result = getStacks(crates);
        const expected = {
            1: ['N', 'Z'],
            2: ['D', 'C', 'M'],
            3: ['P'],
        };
        expect(result).toEqual(expected);
    });

    it('Should move the boxes to new arrays', () => {
        const originalStacks = getStacks(crates);
        const result = moveStacks(originalStacks, instructions, true);
        const expected = {
            1: ['C'],
            2: ['M'],
            3: ['Z', 'N', 'D', 'P'],
        };
        expect(result).toEqual(expected);
    });
    it('Should get the top boxes', () => {
        const input = {
            1: ['C'],
            2: ['M'],
            3: ['Z', 'N', 'D', 'P'],
        };

        const result = getTopBoxes(input);

        expect(result).toEqual('CMZ');
    });
});

describe('Puzzle 1', () => {
    it('Should match the problem description input', () => {
        const result = puzzle1(input);
        expect(result).eq('CMZ');
    });
});

describe('Puzzle 2', () => {
    it('Should match the problem description input', () => {
        const result = puzzle2(input);
        expect(result).eq('MCD');
    });
});
