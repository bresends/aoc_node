import { readTextFile } from '../../utils/readFile';

export function puzzle1(input: string) {
    return findIndexOfUniqueLetters(input, 4);
}

export function puzzle2(input: string) {
    return findIndexOfUniqueLetters(input, 14);
}

function findIndexOfUniqueLetters(input: string, windowSize: number) {
    let position = windowSize;
    const inputArray = input.split('');

    while (inputArray.length) {
        const letters = inputArray.slice(0, windowSize);

        // If there are no repeated letters, return the position
        if (new Set(letters).size === letters.length) return position;

        inputArray.shift();
        position++;
    }
}

const input = readTextFile({
    folder: '2022/day_06',
    name: 'signals',
});

console.log(puzzle1(input));
console.log(puzzle2(input));
