import { readTextFile } from '../../utils/readFile';

export function puzzle1(input: string) {
    return input
        .split('\n\n')
        .map(getSumOfGroup)
        .reduce((max, cur) => (cur > max ? cur : max));
}

export function puzzle2(input: string) {
    return input
        .split('\n\n')
        .map(getSumOfGroup)
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((acc, crr) => acc + crr, 0);
}

const getSumOfGroup = (group: string) =>
    group.split('\n').reduce((acc, cur) => acc + Number(cur), 0);

const input = readTextFile({
    folder: '2022/day_01',
    name: 'calories',
});

console.log(puzzle1(input));
console.log(puzzle2(input));
