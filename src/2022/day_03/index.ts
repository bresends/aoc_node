import { readTextFile } from '../../utils/readFile';

export function puzzle1(input: string) {
    return input
        .split('\n')
        .map(findRepeatedItem)
        .map(calculateLetterScore)
        .reduce((total, cur) => total + cur, 0);
}

export function puzzle2(input: string) {
    return createGroups(input.split('\n'))
        .map(findBadge)
        .map(calculateLetterScore)
        .reduce((total, cur) => total + cur, 0);
}

function findRepeatedItem(rucksack: string) {
    const firstCompartment = rucksack
        .substring(0, rucksack.length / 2)
        .split('');

    const secondCompartment = rucksack.substring(rucksack.length / 2).split('');

    // To scale linearly (has only returns once, and includes in exponential)
    const secondCompartmentSet = new Set(secondCompartment);
    return firstCompartment.find((item) => secondCompartmentSet.has(item));
}

/*
UTF Character | Decimal 
--------- | ------- 
'A'       | 65      
'a'       | 97      
*/

function calculateLetterScore(letter: string) {
    // UpperCase as 0 + 27 to be the next number after the lowercases.
    if (letter === letter.toUpperCase()) return letter.charCodeAt(0) - 65 + 27;
    return letter.charCodeAt(0) - 96;
}

function createGroups(rucksacks: Array<string>) {
    const groups = [];
    while (rucksacks.length) {
        groups.push(rucksacks.splice(0, 3));
    }
    return groups;
}

function findBadge([sack1, sack2, sack3]: Array<string>) {
    const [set1, set2, set3] = [new Set(sack1), new Set(sack2), new Set(sack3)];
    const badge = [...set1].find((item) => set2.has(item) && set3.has(item));
    return badge;
}

const input = readTextFile({
    folder: '2022/day_03',
    name: 'rucksacks',
});

console.log(puzzle1(input));
console.log(puzzle2(input));
