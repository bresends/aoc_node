import { readTextFile } from '../../utils/readFile';

export function puzzle1(input: string) {
    return convertToRange(input).filter(totalOverlapCheck).length;
}

export function puzzle2(input: string) {
    return convertToRange(input).filter(partialOverlapCheck).length;
}

function convertToRange(inputText: string) {
    // Format: 31-31,32-40 - '()' to capture groups, '\d' for a digit '+' for a sequence of 1+ digits, and the other caracters to match the Format.
    // Slice to remove the first element of the return array, that is the original string.
    return inputText.split('\n').map((pair) =>
        pair
            .match(/(\d+)-(\d+),(\d+)-(\d+)/)
            .slice(1)
            .map(Number)
    );
}

function totalOverlapCheck([
    sec1Start,
    sec1End,
    sec2Start,
    sec2End,
]: Array<number>) {
    return (
        (sec1Start >= sec2Start && sec1End <= sec2End) ||
        (sec1Start <= sec2Start && sec1End >= sec2End)
    );
}

function partialOverlapCheck([
    sec1Start,
    sec1End,
    sec2Start,
    sec2End,
]: Array<number>) {
    return sec1Start <= sec2End && sec2Start <= sec1End;
}

const input = readTextFile({
    folder: '2022/day_04',
    name: 'pairs',
});

console.log(puzzle1(input));
console.log(puzzle2(input));
